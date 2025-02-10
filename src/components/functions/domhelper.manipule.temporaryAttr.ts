import * as DOMInterface from "../../interfaces/html.basic.element.js";

// Função para alternar atributos variados de um elemento HTML
export function temporaryAttr(elemento: HTMLElement, atributos: DOMInterface.Atributes, time: number): void {
  for (const atributo in atributos) {
    elemento.setAttribute(atributo, atributos[atributo]);
  }

  setTimeout(() => {
    for (const atributo in atributos) {
      elemento.removeAttribute(atributo);
    }
  }, time);
}
