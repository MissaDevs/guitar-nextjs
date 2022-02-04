import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Cursos.module.css'

const Cursos = ({curso}) => {

  const { titulo, descripcion, precio, imagen, duracion, url } = curso

  return (
    <div className={styles.cursos}>
        <Image layout="responsive" width={150} height={100} src={imagen.url} alt={`Imagen curso ${titulo}`}/>
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.duracion}>Duracion {duracion} minutos</p>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`/cursos/${url}`}>
                <a className={styles.enlace}>
                  Información curso
                </a>
            </Link>
        </div>
    </div>
  )
};

export default Cursos;
