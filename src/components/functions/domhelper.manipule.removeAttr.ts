import * as DOMInterface from "../../interfaces/html.basic.element.js";

//Função para remover e atualizar atributos variados de um elemento HTML
export function removeAttr(elemento: HTMLElement, atributos: DOMInterface.Atributes): void {
  for (const atributo in atributos) {
    const valorRemover = atributos[atributo];
    const valorAtual = elemento.getAttribute(atributo);

    if (!valorAtual) continue; // Se o atributo não existe, pula

    // Remove apenas o valor específico do atributo
    const novoValor = valorAtual.split(" ").filter(v => v !== valorRemover).join(" ");

    if (novoValor) {
      elemento.setAttribute(atributo, novoValor); // Atualiza o atributo
    } else {
      elemento.removeAttribute(atributo); // Se não sobrar nada, remove o atributo inteiro
    }
  }
}