export const setTodoItem = (key,value) => {
    localStorage.setItem(key, value);
}

export const getTodoItem = (key) => {
    return localStorage.getItem(key) ;
}
