import React from "react";
import WizardInput from "../../../../components/wizardInput/wizardInput";


const ProductFields = ({inputsFields, ...props}) => {
  return (
    inputsFields.map((inputField, key) => {
      return (
        <WizardInput {...props} field={inputField} key={key}/>
      )
    })
  );
}

export default ProductFields;