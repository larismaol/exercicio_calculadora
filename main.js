function somar() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 + numero2;
    document.getElementById("resultado").value = resultado;
  }
  
  function subtrair() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 - numero2;
    document.getElementById("resultado").value = resultado;
  }
  
  function multiplicar() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 * numero2;
    document.getElementById("resultado").value = resultado;
  }
  
  function dividir() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 / numero2;
    document.getElementById("resultado").value = resultado;
  }