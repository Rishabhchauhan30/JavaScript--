const myTodos = ['Buy bread', 'Go to walk', 'Do C.P questions']
console.log(myTodos.indexOf('Buy bread'))


const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to walk',
    isDone: true,
}, {
    title: 'Do C.P questions',
    isDone: true,
}]

const inex = newTodos.findIndex(function(todo, index){
    console.log(todo);
    
    return todo.title === 'Go to walk'
})
console.log(index)