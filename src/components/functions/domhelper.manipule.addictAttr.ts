import * as DOMInterface from "../../interfaces/html.basic.element.js";

//Função para adicionar atributos variados a um elemento HTML
export function addictAttr(elemento: HTMLElement, atributos: DOMInterface.Atributes): void {
  for (const atributo in atributos) {
    const novoValor = atributos[atributo];
    const valorAtual = elemento.getAttribute(atributo);

    if (valorAtual) {
      // Se já existir, adiciona sem repetir valores
      const valores = new Set(valorAtual.split(" ").concat(novoValor));
      elemento.setAttribute(atributo, Array.from(valores).join(" "));
    } else {
      // Se o atributo não existir, apenas adiciona
      elemento.setAttribute(atributo, novoValor);
    }
  }
}