//Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
import {useForm} from "react-hook-form";

import {saveUser} from "../../services";

const Users = () => {
    let {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{name:"Name",username:"username",email:"EMAIL"}
    })
    const submit = (data) => {
    saveUser(data).then(({data})=>console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name',{required:true})}/>
                {errors.title && <span>eroraaaa</span>}
                <input type='text' {...register('username',{required:true})}/>
                <input type='text' {...register('email',{required:true})}/>
                <input type='submit' value={'Save'}/>
            </form>
        </div>
    );
}
export {Users}