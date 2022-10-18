export default function Jsx2() {
  const a = 5;
  const b = 10;
  // console.log(a * b);
  const obj = { nome: "João", idade: 30 };
  return (
    <div>
      <h1>JSX é um conceito Central</h1>
      <h2>{"muito legal".toUpperCase()}</h2>
      <p>{JSON.stringify({ nome: "João", idade: 30 })}</p>
    </div>
  );
}
