interface ElementData {
  tag: string;
  attributes?: {
    [key: string]: string; // Permite qualquer atributo HTML válido
  };
}

interface Atributes {
  [key: string]: string; // Permite qualquer atributo HTML válido
}

export type {
  ElementData,
  Atributes
}