export default function Cabecalho(oqquiser) {
  // export default function Cabecalho(props) geralmente é props, propriedade
  // console.log(oqquiser.titulo);
  //props é somente leitura
  return (
    <header>
      <h1>{oqquiser.titulo}</h1>
    </header>
  );
}
