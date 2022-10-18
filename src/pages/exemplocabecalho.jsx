import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
  return (
    <Layout titulo="Usando Componentes">
      <Cabecalho titulo="Next.js & React" />
      <Cabecalho titulo="Aprendendo Next na Prática" />
    </Layout>
  );
}
