import Image from "next/image";
import styles from "./page.module.css";
import { montserrat } from "@/lib/utils";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
export default function Home() {

  return (
  <section className={`${styles.Container} ${montserrat.className}`}>
    <div className={styles.HeroSection}>
      <div className={styles.HeroSectionContent}>
      <h1>¡Bienvenido a GenHuman!</h1>
      <h2>Ponle cara a tus personajes de rol de mano de nuestros artistas gracias a nuestro creador de personajes</h2>
      <button className={`${montserrat.className}`}><Link className={styles.ButtonLink} href="/charcreator">¡Pruébalo!</Link></button>
      </div>
      <div className={styles.More}>
        <ArrowDownIcon className={styles.ArrowIcon} />
        <h3>Más información</h3>
      </div>
    </div>
        <div className={styles.HeroSection}>
      <div className={styles.HeroSectionContent}>
      <h1>¡Bienvenido a GenHuman!</h1>
      <h2>Ponle cara a tus personajes de rol de mano de nuestros artistas gracias a nuestro creador de personajes</h2>
      <button className={`${montserrat.className}`}><Link className={styles.ButtonLink} href="/charcreator">¡Pruébalo!</Link></button>
      </div>
      <div className={styles.More}>
        <ArrowDownIcon className={styles.ArrowIcon} />
        <h3>Más información</h3>
      </div>
    </div>
        <div className={styles.HeroSection}>
      <div className={styles.HeroSectionContent}>
      <h1>¡Bienvenido a GenHuman!</h1>
      <h2>Ponle cara a tus personajes de rol de mano de nuestros artistas gracias a nuestro creador de personajes</h2>
      <button className={`${montserrat.className}`}><Link className={styles.ButtonLink} href="/charcreator">¡Pruébalo!</Link></button>
      </div>
      <div className={styles.More}>
        <ArrowDownIcon className={styles.ArrowIcon} />
        <h3>Más información</h3>
      </div>
    </div>
  </section>
  );
}
