import * as DOMInterface from "../../interfaces/html.basic.element.js";

// Função para alternar atributos variados de um elemento HTML
export function toggleAttr(elemento: HTMLElement, atributos: DOMInterface.Atributes): void {
  for (const atributo in atributos) {
    const valor = atributos[atributo];

    if (elemento.getAttribute(atributo) === valor) {
      elemento.removeAttribute(atributo); // Remove o atributo se já existir com o mesmo valor
    } else {
      elemento.setAttribute(atributo, valor); // Adiciona o atributo se ele não existir
    }
  }
}