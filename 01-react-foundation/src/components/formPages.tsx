import { useForm } from "react-hook-form";

const formPages = () => {



    type FormInputs = {
        email: string;
        password: string;
    }

    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues:{
            email: 'bryan21550@gmail.com',
            password: '12345'
        }
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log("my form:", myForm)
        
    }

    console.log(watch('email'));
    

  return (
    <>
    <form onSubmit={ handleSubmit(onSubmit)}>
        <h3>formulario</h3>
        <div style={{display:'flex', flexDirection:'column'}}>
            <input type="text" placeholder='Email' {...register('email', {required: true})}  />
            <input type="password" placeholder='password' {...register('password', {required: true})} />
            <button type='submit'>Ingresar</button>
        </div>
    </form>


    <pre>
        {JSON.stringify(formState, null, 2)}
    </pre>
    </>
  )
}

export default formPages

