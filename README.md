# NgxPnInput 📞
A small phone number input with country code selector for AngularJS using `google-libphonenumber` library.

## Installation
`npm i ngx-pn-input`

<br>

### @Inputs()
| **Input**  | **Type**   | **Required** | **Description**                        |
| :--------: | :--------: | :----------: | -------------------------------------- |
| phone      | string     | No           | Defines a default phone number         |
| code       | string     | No           | Defines a country code for number      |
| basicStyle | object     | No           | Defines the basic styles for the input |

### @Outputs()
| **Output**      |  **Type**    | **Required** | **Description**                                 |
| :-------------: | :----------: | :----------: | ----------------------------------------------- |
| submitPhoneData | EventEmitter | **Yes**      | Emits the phone number and if it's valid or not |

### Styles
The @input basicStyle allows you to modify some styles into the component:

| **Attribute**          | **Type**     | **Required** | **Description**                                 |
| :--------------------: | :----------: | :----------: | :---------------------------------------------: |
| inactiveUnderlineColor | string (hex) | No           | Defines the underline's color where is inactive |
| activeUnderlineColor   | string (hex) | No           | Defines the underline's color where is active   |
| fontSize               | string (px)  | No           | Sets a font size                                |
| fontColor              | string (hex) | No           | Sets a font color                               |
| modalBgColor           | string (hex) | No           | Defines a background color for country modal    |
