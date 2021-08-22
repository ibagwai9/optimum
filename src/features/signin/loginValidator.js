import rules  from "validator";

const validator = ({lab_number, token}) =>{
    const errors = {};
    if(rules.isEmpty(lab_number)){
        errors.lab_number = "Enter your lab number";
    }else if(!rules.isAlphanumeric(lab_number)){
        errors.lab_number = "Invalid lab number";
    }else if(!rules.isLength(lab_number,5,32)){
        errors.lab_number ="Verify your lab number";
    }

    if(rules.isEmpty(token)){
        errors.token = "Enter your token";
    }else if(!rules.isAlphanumeric(token)){
        errors.token = "Invalid lab token";
    }
    return errors;
}

export default validator;