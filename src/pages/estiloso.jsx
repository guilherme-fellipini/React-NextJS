import estilocssqualquernome from "../styles/Estiloso.module.css";
// import styles from "../styles/Estiloso.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de CSS Modularizado">
      <div className={estilocssqualquernome.corroxa}>
        {/* <Link href="/">Voltar</Link> */}
        <h1>Estilo Usando CSS Módulos</h1>
      </div>
    </Layout>
  );
}
