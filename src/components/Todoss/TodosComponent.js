export default function TodosComponent({todos}) {
    return (
        <div>
            User - {todos.userId} todos - {todos.id} - {todos.title} Status - {todos.completed.toString()}
        </div>
    );
}