// Função para obter todos os atributos de um elemento HTML
export function getAllAttr(elemento: HTMLElement): Record<string, string> {
  const atributos: Record<string, string> = {};
  for (const attr of elemento.attributes) {
    atributos[attr.name] = attr.value;
  }
  return atributos;
}
