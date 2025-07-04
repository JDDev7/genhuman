"use client"; // Indica que este código solo se ejecuta en el cliente

import html2canvas from "html2canvas";

const exportAsImage = async (el, imageFileName) => {
  if (!el) {
    console.error("El elemento no está definido");
    return;
  }

  const scale = window.devicePixelRatio || 1;

  // Determinar el tamaño deseado según el ancho de la pantalla
  const getDesiredSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      // Para pantallas grandes (escritorio)
      return { width: 648, height: 539 };
    } else if (screenWidth >= 768) {
      // Para tablets
      return { width: 540, height: 400 };
    } else {
      // Para móviles
      return { width: 360, height: 300 };
    }
  };

  const { width: desiredWidth, height: desiredHeight } = getDesiredSize();

  // Capturar el elemento con html2canvas
  const canvas = await html2canvas(el, {
    backgroundColor: null, // Fondo transparente
    scale: scale, // Usa el factor de escala del dispositivo
  });

  // Calcular la relación de aspecto del contenido original
  const originalWidth = canvas.width / scale;
  const originalHeight = canvas.height / scale;
  const originalAspectRatio = originalWidth / originalHeight;

  // Calcular el tamaño del contenido ajustado dentro del nuevo lienzo
  let adjustedWidth, adjustedHeight;
  const targetAspectRatio = desiredWidth / desiredHeight;

  if (originalAspectRatio > targetAspectRatio) {
    // El contenido es más ancho que el destino: ajustar por anchura
    adjustedWidth = desiredWidth;
    adjustedHeight = desiredWidth / originalAspectRatio;
  } else {
    // El contenido es más alto que el destino: ajustar por altura
    adjustedHeight = desiredHeight;
    adjustedWidth = desiredHeight * originalAspectRatio;
  }

  // Crear un nuevo lienzo con el tamaño deseado
  const resizedCanvas = document.createElement("canvas");
  resizedCanvas.width = desiredWidth; // Ancho deseado
  resizedCanvas.height = desiredHeight; // Alto deseado

  const ctx = resizedCanvas.getContext("2d");

  // Centrar el contenido ajustado dentro del nuevo lienzo
  const x = (desiredWidth - adjustedWidth) / 2;
  const y = (desiredHeight - adjustedHeight) / 2;

  // Dibujar el contenido ajustado en el lienzo redimensionado
  ctx.drawImage(
    canvas,
    0, 0, canvas.width, canvas.height, // Coordenadas y tamaño del lienzo original
    x, y, adjustedWidth, adjustedHeight // Posición y tamaño ajustado en el lienzo redimensionado
  );

  // Convertir el lienzo redimensionado en una URL de datos
  const image = resizedCanvas.toDataURL("image/png", 1.0); // Usamos PNG para preservar la transparencia

  // Descargar la imagen
  downloadImage(image, imageFileName);
};

const downloadImage = (blob, fileName) => {
  const fakeLink = document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

export default exportAsImage;