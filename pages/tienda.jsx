import Listado from "../components/Listado";
import Layout from "../components/Layout";

const Tienda = ({guitarras}) => {
  return (
    <Layout pagina='Tienda'>
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleeción</h1>

        <Listado 
          guitarras={guitarras}
        />
      </main>
    </Layout>
  )
};

export async function getServerSideProps () {
    const url = `${process.env.API_URL}/guitarras`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()

    return {
      props: {
        guitarras
      }
    }
}

export default Tienda;
