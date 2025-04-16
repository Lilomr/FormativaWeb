opcao = '';

function mostrarValor(ev){
    console.log(ev.target.innerText);
}

function getInput(opcao){
    if (opcao == 'nome'){
        var nome = document.getElementById('input').value;
        return nome;
    }else if (opcao == 'idade'){
        var idade = document.getElementById('input').value;
        return idade;
    }

}



function guardarNome() {  
    console.log(getInput('nome')); document.getElementById('nomeDisplay').innerText = 'Nome: '+getInput('nome');
  document.getElementById('input').value = '';

}
function guardarIdade() {  
  console.log(getInput('idade'));
  document.getElementById('idadeDisplay').innerText = 'Idade: '+getInput('idade');
  document.getElementById('input').value = '';
}

function limparVariaveis(){
    document.getElementById('nomeDisplay').innerText = 'Nome: ';
    document.getElementById('idadeDisplay').innerText = 'Idade: ';
}
