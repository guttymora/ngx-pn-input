export default class ComponentStyles {
    height?: string;
    inactiveUnderlineColor?: string;
    activeUnderlineColor?: string;
    fontFamily?: string;
    fontSize?: string;
    fontColor?: string;
    modalBgColor?: string;
    optionHover?: string;
    modalBorderColor?: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
