import { useState } from 'react';
import { login } from '../../app/reduces/signinSlice';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

const useLogin = validate =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
    const [values,setValues] = useState({
        lab_number:'',
        token:''
    });
    const errors = validate(values);
    const count_err = Object.values(errors)?.length;
    const count_val = Object.values(values)?.length
    const handleChange = ({target}) =>{
        const {name, value} = target;
        setValues({
            ...values,
            [name]:value
        });
        validate(values);
    }

    async function  handleSubmit (e){
        e.preventDefault();
        console.log({count_err,count_val})
        if(count_err<1 && count_val>1){ 
           await dispatch(login({username:values.lab_number, password:values.token}));    
            history.replace(from);    
            
        }
    }

    return {errors,values,handleChange,handleSubmit}
}

export default useLogin;