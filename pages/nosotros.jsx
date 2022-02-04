import Layout from "../components/Layout";
import styles from '../styles/Nosotros.module.css'
import Image from "next/image";

const Nosotros = () => {
  return (
    <Layout pagina='Nosotros'>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>

          <Image width={600} layout="responsive" height={450} src='/img/nosotros.jpg' alt="Imagen sobre nosotros"/>

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet diam eget massa finibus ultrices id in dolor. Aenean nec massa sit amet nisi vulputate venenatis ac et mi. Vivamus ac interdum ante. Morbi nec lorem sed lorem hendrerit viverra. Nullam porttitor aliquet turpis, a vulputate lectus auctor quis. Vestibulum elementum imperdiet iaculis. Phasellus posuere, nulla ac vestibulum blandit, mi ipsum pulvinar elit, nec venenatis turpis ante sed quam. Aenean eget dolor felis. Pellentesque non fringilla ex. Quisque ultrices lorem a mi ornare, ac luctus nulla imperdiet.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet diam eget massa finibus ultrices id in dolor. Aenean nec massa sit amet nisi vulputate venenatis ac et mi. Vivamus ac interdum ante. Morbi nec lorem sed lorem hendrerit viverra. Nullam porttitor aliquet turpis, a vulputate lectus auctor quis. Vestibulum elementum imperdiet iaculis. Phasellus posuere, nulla ac vestibulum blandit, mi ipsum pulvinar elit, nec venenatis turpis ante sed quam. Aenean eget dolor felis. Pellentesque non fringilla ex. Quisque ultrices lorem a mi ornare, ac luctus nulla imperdiet.</p>
          </div>
          
        </div>
        
      </main>
    </Layout>
  )
};

export default Nosotros;
