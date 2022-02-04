import Layout from "../components/Layout";
import ListadoCursos from "../components/ListadoCursos";

const Cursos = ({cursos}) => {
    console.log(cursos)
  return (
    <Layout pagina='Cursos'>
        <main className="contenedor">
            <h1 className="heading">Nuestros Cursos</h1>

            <ListadoCursos 
                cursos={cursos}
            />
        </main>
    </Layout>
  )
};

export async function getServerSideProps () {
    const url = `${process.env.API_URL}/cursos-completos`
    const respuesta = await fetch(url)
    const cursos = await respuesta.json()

    return {
        props: {
            cursos
        }
    }
}

export default Cursos;
