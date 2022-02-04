import Cursos from './Cursos';
import styles from '../styles/ListadoCursos.module.css'

const ListadoCursos = ({cursos}) => {
  return (
    <div className={styles.cursos}>
      {cursos.map(curso => (
        <Cursos
            key={curso.id}
            curso={curso}
        />
      ))}
    </div>
  )
};

export default ListadoCursos;
