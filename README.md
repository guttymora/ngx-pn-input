# NgxPnInput 📞
A small phone number input with country code selector for AngularJS using `google-libphonenumber` library.

## Installation
`npm i ngx-pn-input`

<br>

### @Inputs()
| **Input**  | **Type**   | **Required** | **Description**                        |
| ---------- | :--------: | :----------: | -------------------------------------- |
| phone      | string     | No           | Defines a default phone number         |
| code       | string     | No           | Defines a country code for number      |
| basicStyle | object     | No           | Defines the basic styles for the input |

### @Outputs()
| **Output**      |  **Type**    | **Required** | **Description**                                 |
| --------------- | :----------: | :----------: | ----------------------------------------------- |
| submitPhoneData | EventEmitter | **Yes**      | Emits the phone number and if it's valid or not |

<br>

### Styles
The @input basicStyle allows you to modify some styles into the component:

| **Attribute**          | **Type**     | **Required** | **Description**                                                |
| ---------------------- | :----------: | :----------: | -------------------------------------------------------------- |
| height                 | string (px)  | No           | Defines the height of the phone input                          |
| inactiveUnderlineColor | string (hex) | No           | Defines the underline's color where is inactive                |
| activeUnderlineColor   | string (hex) | No           | Defines the underline's color where is active                  |
| fontSize               | string (px)  | No           | Sets a font size                                               |
| fontFamily             | string       | No           | Set a font family for the all component texts                  |
| fontColor              | string (hex) | No           | Sets a font color                                              |
| modalBgColor           | string (hex) | No           | Defines a background color for country modal                   |
| optionHover            | string (hex) | No           | Defines a background color when mouse is over a country option |
| modalBorderColor       | string (hex) | No           | Defines a border color for country modal                       |
