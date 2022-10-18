import Link from "next/link";
import Navegador from "../components/Navegador";

export default function Futuro() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplocabecalho" cor="#5b03ae" />
      <Navegador texto="JSX" destino="/jsx" cor="green" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="#a45b71" />
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="gray" />
      <Navegador
        texto="Componente com Estado"
        destino="/estado"
        cor="crimson"
      />
      <Navegador
        texto="Integração com API #01"
        destino="/integracao_1"
        cor="black"
      />
      <Navegador texto="Conteudo Estático" destino="/estatico" cor="violet" />
      <Navegador
        texto="Conteudo
        Dinâmico"
        destino="/dinamico"
        cor="green"
      />
    </div>
  );
}
