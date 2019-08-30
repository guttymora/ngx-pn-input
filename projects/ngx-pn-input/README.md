# PhoneInput
It's a small input component for phone numbers with a country code selector using **Google** 
`google-libphonenumber` library.

## Installation
`npm i phone-input`

### @Inputs()
| **Input** |  **Type**  | **Required** | **Description**                   |
| :-------: | :--------: | :----------: | --------------------------------- |
| phone     | string     | No           | Defines a default phone number    |
| code      | string     | No           | Defines a country code for number |

### @Outputs()
| **Output** |  **Type**  | **Required** | **Description**                                |
| :-------: | :--------: | :----------: | ----------------------------------------------- |
| phone     | string     | **Yes**      | Emits the phone number and if it's valid or not |
