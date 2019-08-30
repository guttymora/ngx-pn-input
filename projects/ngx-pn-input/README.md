# NgxPnInput
A small phone number input with country code selector for AngularJS using `google-libphonenumber` library.

## Installation
`npm i ngx-pn-input`

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
