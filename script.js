function textoDeExibicao(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function criptografar() {
  let texto = document.querySelector('textarea').value;

  let textoCriptografado = removeDiacriticos(texto.toLowerCase());

  if (textoCriptografado != '') {
    textoCriptografado = textoCriptografado
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');

    textoDeExibicao('.mensagem_saida', textoCriptografado);
    document.querySelector('textarea').value = '';
    exibirTextoSaida();
  }
}
function descriptografar() {
  textoDeExibicao('.mensagem_saida', '');
  let texto = document.querySelector('textarea').value;

  let textoDescriptografado = removeDiacriticos(texto.toLowerCase());

  if (textoDescriptografado != '') {
    textoDescriptografado = textoDescriptografado
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

    textoDeExibicao('.mensagem_saida', textoDescriptografado);
    document.querySelector('textarea').value = '';
    exibirTextoSaida();
  }
}

function exibirTextoSaida() {
  // Retirar mensagens exibidas antes da saída
  let mensagemCriptografada = document.querySelector(
    '.container__card_secao__saida'
  );
  let mensagemVazia = document.querySelector('.container__card_secao__vazio');
  mensagemCriptografada.style.display = 'flex';
  mensagemVazia.style.display = 'none';
}

function removeDiacriticos(textoUsuario) {
  return textoUsuario
    .normalize('NFD') // Separa as letras dos diacríticos
    .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
    .replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres e números
}

function copiarTextoSaida() {
  let textoSaida = document.querySelector('.mensagem_saida').innerText;

  navigator.clipboard.writeText(textoSaida);
  document.querySelector('.mensagem_saida').innerText = '';
  location.reload();
}
