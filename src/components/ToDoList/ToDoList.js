import './ToDoList.css';

function ToDoList({error, onError, loading, onLoading, searchedToDos, onEmptyToDos, RenderItems, children, totalToDos, onEmptySearchResults, searchValue}) {
    return(
        <section className='TodoList-container'>

            {error && onError()}
            {loading && onLoading()}
            {(!loading && !totalToDos) && onEmptyToDos()}
            {searchedToDos?.map(todo => RenderItems(todo))}
            {(totalToDos && !searchedToDos.length) && onEmptySearchResults(searchValue)}

            <ul>
                {children}
            </ul>
        </section>
    )
}

export {ToDoList};