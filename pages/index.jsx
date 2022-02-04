import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, blog, curso}) {
  return (
    <Layout 
            pagina='Inicio' 
            guitarra={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado guitarras={guitarras}/>
      </main>

      <Curso curso={curso}/>

      <section className='contenedor'>
        <ListadoBlog entradas={blog}/>
      </section>
    </Layout>
  )
}

export async function getServerSideProps () {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&`
  const urlCursos = `${process.env.API_URL}/cursos`

  const [resGuitarras, resBlog, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlBlog),
    fetch(urlCursos)
  ])

  const [guitarras, blog, curso] = await Promise.all([
    resGuitarras.json(),
    resBlog.json(),
    resCurso.json()
  ])

  return {
    props: {
      guitarras,
      blog,
      curso
    }
  }
}