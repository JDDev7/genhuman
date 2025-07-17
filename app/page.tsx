
import styles from "./page.module.css";
import { montserrat } from "@/lib/utils";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import ArtistComponent from "./components/navbar/artists/artist-component";
export default function Home() {
  return (
    <section className={`${styles.Container} ${montserrat.className}`}>
      <div className={styles.HeroSection}>
        <div className={styles.HeroSectionContent}>
          <h1>¡Bienvenido a GenHuman!</h1>
          <h2>
            Ponle cara a tus personajes de rol de mano de nuestros artistas
            gracias a nuestro creador de personajes
          </h2>
          <button className={`${montserrat.className}`}>
            <Link className={styles.ButtonLink} href="/charcreator">
              ¡Pruébalo!
            </Link>
          </button>
        </div>
        <div className={styles.More}>
          <ArrowDownIcon className={styles.ArrowIcon} />
          <h3>Más información</h3>
        </div>
      </div>
      <section className={styles.Container}>
        <div className={styles.ArtistsHeroSection}>
          <div className={styles.ArtistsHeroSectionTextContent}>
            <h1>Nuestros Artistas</h1>
          </div>
          {/* <div className={styles.ArtistsHeroSectionTextContent}>
            <h2>Artistas humanos, arte humano, cero IA generativa</h2>
            <p>
              En GenHuman no utilizamos la IA para generar las imagenes de
              nuestros personajes. Todo viene de la mano de nuestros artistas,
              dibujado con cariño y a mano para que tengas un diseño de calidad.
              Aquí podrás ver a nuestros artistas destacados y saber más sobre ellos.
            </p>
          </div> */}
          <div className={styles.SeparationLine}></div>
          <div className={styles.ArtistsHighlight}>
            <div className={styles.ArtistsImages}>
              <ArtistComponent
                name="Obaba Banana"
                image1="https://placehold.co/600x400.png"
                image2="https://placehold.co/600x400.png"
                image3="https://placehold.co/600x400.png"
              />
            </div>
            <div className={styles.ArtistsImages}>
              <ArtistComponent
                name="MessED"
                image1="https://placehold.co/600x400.png"
                image2="https://placehold.co/600x400.png"
                image3="https://placehold.co/600x400.png"
              />
            </div>
            <div className={styles.ArtistsImages}>
              <ArtistComponent
                name="Nero Kirami"
                image1="https://placehold.co/600x400.png"
                image2="https://placehold.co/600x400.png"
                image3="https://placehold.co/600x400.png"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
