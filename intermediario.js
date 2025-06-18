import React from 'react';

function Cabecalho() {
  return <h1>Meu Site Incrível</h1>;
}

function ConteudoPrincipal() {
  return (
    <main>
      <p>Bem-vindo ao meu site!</p>
      <p>Aqui você encontra informações interessantes sobre React.</p>
    </main>
  );
}

function Rodape() {
  return (
    <footer>
      <p>&copy; 2025 Meu Nome. Todos os direitos reservados.</p>
    </footer>
  );
}

function ListaTarefas() {
  const tarefas = ["Estudar React", "Fazer exercícios", "Beber água"];

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <Cabecalho />
      <ConteudoPrincipal />
      <ListaTarefas />
      <Rodape />
    </>
  );
}

export default App;
