export default class ComponentStyles {
    inactiveUnderlineColor?: string;
    activeUnderlineColor?: string;
    fontSize?: string;
    fontColor?: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
