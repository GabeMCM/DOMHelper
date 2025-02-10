import * as DOMInterface from "../interfaces/html.basic.element.ts";
import * as attrFunctions from "./functions/export.attrfunctions.ts"

const DOMHelper = {

	Manipule(element: HTMLElement) {
		return {
			removeAttr: (atributos: DOMInterface.Atributes) => attrFunctions.removeAttr(element, atributos),
			renameAttr: (atributos: DOMInterface.Atributes, newAttr: string) => attrFunctions.renameAttr(element, atributos, newAttr),
			addictAttr: (atributos: DOMInterface.Atributes) => attrFunctions.addictAttr(element, atributos),
			temporaryAttr: (atributos: DOMInterface.Atributes, time: number) => attrFunctions.temporaryAttr(element, atributos, time),
			toggleAttr: (atributos: DOMInterface.Atributes) => attrFunctions.toggleAttr(element, atributos)
		}
	},

	Inside: {
		
		target: null as HTMLElement | null,

		setTarget(element: HTMLElement): void {
			this.target = element;
		},

		create(config: DOMInterface.ElementData): HTMLElement {
			return document.createElement(config.tag);
		}
	}
}