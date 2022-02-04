import Image from "next/image";
import Layout from '../../components/Layout'
import styles from '../../styles/Cursos.module.css'

const CursoMasInfo = ({curso}) => {
  
  const { titulo, descripcion, precio, imagen, duracion } = curso[0]

  return (
    <Layout pagina={`Curso - ${titulo}`}>
      <div className={styles.cursoInfo}>
        <Image layout="responsive" width={150} height={100} src={imagen.url} alt={`Imagen curso ${titulo}`}/>
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.duracion}>Duracion {duracion} minutos</p>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            
            <form className={styles.formulario}>
              <input 
                      type="submit"
                      value='Agregar al carrito' />
            </form>
        </div>
      </div>
    </Layout>
  )
};

export async function getServerSideProps ({query: {url}}) {
  const urlCurso = `${process.env.API_URL}/cursos-completos?url=${url}`
  const respuesta = await fetch(urlCurso)
  const curso = await respuesta.json()

  return {
    props: {
      curso
    }
  }
}

export default CursoMasInfo;
