const todo = require('../pageobjects/todo.page');

describe('Create My Todo list', () => {
    it('should Home page load as expected', async () => {
        await todo.open();
        expect(todo.headerH1).toBeDisplayed();
    });

    it('Should be able to add New Todo', async () => {
        await todo.addNewTodoAction('Milk ');
        expect(todo.itemsCount).toHaveText('1');
        await todo.addNewTodoAction('Apple');
        await todo.addNewTodoAction('Tony\'s Chocolonely');
        await todo.addNewTodoAction('Club Mate');
        expect(todo.itemsCount).toHaveText('4');
    });

    it('Should delete todo', async () =>{
        todo.setPosition(2); // Delete todo number 3 (can be better than that 🐶)
        console.log(todo.deleteTodo);
        currentItemsCount = await todo.itemsCount.getText(); // to make sure that we actully delete one.
        await todo.deleteTodoAction();
        expect(todo.itemsCount).toHaveText((Number(currentItemsCount) - 1).toString());
    });

    it('Should mark todo as Complete', async () => {
        todo.setPosition(1);
        await todo.markItemAsComplete.click();
    });

    it('Should find todo in Copmlete tab', async () => {
        await todo.completedTab.click()
        expect(todo.firstTaskStatic).toExist()
    });
    
    it('Should Mark all as complete', async () =>{
        await todo.activeTab.click()
        await todo.markAllAsComplete.click()
        expect(todo.itemsCount).toHaveText('0')

    });

    it('Should Clear all Completed Items and back empty stat', async () =>{
        await todo.clearCompleted.click();
        elm = await todo.todoList.isExisting() // return fales if not exist 
        expect(!elm)
    });
});


