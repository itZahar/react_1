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
                {(errors.name || errors.username || errors.email) && <span>ALL field is required</span>}
                <input type='text' {...register('name',{required:true})}/>
                <input type='text' {...register('username',{required:true})}/>
                {/*{errors.username && <span>This fild is required</span>}*/}
                <input type='text' {...register('email',{required:true})}/>
                {/*{errors.email && <span>This fild is required</span>}*/}
                <input type='submit' value={'Save'}/>
            </form>
        </div>
    );
}
export {Users}