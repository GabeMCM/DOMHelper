import * as DOMInterface from "../../interfaces/html.basic.element.js";

//Função para remover e atualizar atributos variados de um elemento HTML
export function renameAttr(elemento: HTMLElement, atributos: DOMInterface.Atributes, newAttr: string): void {
  for (const atributo in atributos) {
    const valorRenomear = atributos[atributo];
    const valorAtual = elemento.getAttribute(atributo);

    if (!valorAtual) continue; // Se o atributo não existe, pula

    // Renomeia apenas o valor específico do atributo
    const novoValor = valorAtual.split(" ").map(v => v === valorRenomear ? newAttr : v).join(" ");

    if (novoValor) {
      elemento.setAttribute(atributo, novoValor); // Atualiza o atributo
    } else {
      elemento.removeAttribute(atributo); // Se não sobrar nada, remove o atributo inteiro
    }
  }
}