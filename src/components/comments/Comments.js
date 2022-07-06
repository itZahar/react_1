import {useForm} from "react-hook-form";

import {commentSubmit} from "../../services";

const Comments = () => {
    let {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{name:"Name",body:"your comment",email:"EMAIL"}
    })
    return (
        <div>
            <form onSubmit={handleSubmit(commentSubmit)}>
                <input type='text' {...register('name',{required:true})}/>
                {errors.title && <span>eroraaaa</span>}
                <input type='text' {...register('body',{required:true})}/>
                <input type='text' {...register('email',{required:true})}/>
                <button>Click me</button>
            </form>

        </div>
    )
}
export {Comments}