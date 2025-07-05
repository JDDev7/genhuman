"use client";

import React from "react";
import exportAsImage from "@/utils/exportAsImage";
import styles from "./charcreator.module.css";
import CharCanvas from "../components/charcanvas/char-canvas";
import CharControls from "../components/charcontrols/char-controls";

function CreatorPage() {
  const exportRef = React.useRef(null);

  return (
    <div className={styles.Container}>
      {/* <div className={styles.CharCreator}>
        <p>Aqui va el creador de pjs</p>
      </div> */}
      <div ref={exportRef}>
      <CharCanvas/>
      </div>
      {/* <div className={styles.Controls}>
        <p>Aqui van los controles</p>
        
      </div> */}
      <CharControls/>
      <button onClick={() => exportAsImage(exportRef.current, "image.png")}>Descargar Imagen</button>
    </div>
  );
}

export default CreatorPage;
