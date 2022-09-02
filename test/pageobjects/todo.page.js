const Page = require('./page');


//setter & getter for a selector to make dynamic. 
// Can be moved to Helper file. 
const todoPosition = {
    Position: '1',
    set changePosition(newPosition) {
        todoPosition.Position = newPosition;
    },
    get getPosition (){
        return this.Position;
    }
};
const itemText = {
    Text: 'Milk',
    set changeText(newText) {
        itemText.Text = newText;
    },
    get getText (){
        return this.Text;
    }
};


class todo extends Page {
  
    get headerH1 () {
        return $('//header/h1');
    }
    get todoList () {
        return $('.todo-list');
    }
    get addNewTodo () {
        return $('.new-todo');
    }
    get firstTask () { 
        return $('body > section > section > ul > li:nth-child('+ todoPosition.getPosition +') > div');
    }
    get firstTaskStatic () { 
        return $('body > section > section > ul > li:nth-child(1) > div > label');
    }
    get todoItemByText () {
        return $('//div[@class="view"]/label[contains(., "'+itemText.getText+'")]');
    }

    get markAllAsComplete () {
        return $('//label[contains(text(),\'Mark all as complete\')]');
    }
    get itemsCount () {
        return $('body > section > footer > span > strong');
    }
    get allTab () {
        return $('//a[@href=\'#/all\']');
    }
    get activeTab () {
        return $('//a[@href=\'#/active\']');
    }
    get completedTab () {
        return $('//a[@href=\'#/completed\']');
    }
    get deleteTodo () { // this way we can delete any item from the list bt paasing the positsion.
        return $('body > section > section > ul > li:nth-child('+ todoPosition.getPosition +') > div > button');
    }
    get markItemAsComplete () {
        return $('/html/body/section/section/ul/li['+ todoPosition.getPosition +']/div/input');
    }
    get clearCompleted () {
        return $('.clear-completed');
    }
   
    async addNewTodoAction (todoTitle) {
        await this.addNewTodo.setValue(todoTitle + '\n');
    }

    async setPosition (posi) {
        todoPosition.changePosition = posi;
    }
    async deleteTodoAction () {
        await this.firstTask.moveTo();
        await this.deleteTodo.click();
    }
    async changeItemText(newItemText) {
        itemText.changeText = newItemText;
    }



    open () {
        return super.open();
    }
}

module.exports = new todo();
