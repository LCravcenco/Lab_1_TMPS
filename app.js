// shoppingList.js

class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(name) {
    const item = new ShoppingItem(name);
    this.items.push(item);
  }

  deleteItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  render() {
    const shoppingList = document.getElementById('shopping-list');
    shoppingList.innerHTML = '';
    this.items.forEach(item => {
      const itemEl = item.render();
      shoppingList.appendChild(itemEl);
    });
  }
}

// shoppingItem.js

class ShoppingItem {
  constructor(name) {
    this.name = name;
    this.isComplete = false;
  }

  render() {
    const item = document.createElement('li');
    item.textContent = this.name;
    if (this.isComplete) {
      item.classList.add('complete');
    }
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      shoppingListService.deleteItem(this);
    });
    item.appendChild(deleteButton);
    item.addEventListener('click', () => {
      shoppingListService.toggleComplete(this);
    });
    return item;
  }
}

// shoppingListActions.js

class ShoppingListActions {
  deleteItem(item, shoppingList) {
    shoppingList.deleteItem(item);
    shoppingList.render();
  }

  toggleComplete(item) {
    item.isComplete = !item.isComplete;
    shoppingListService.render();
  }
}

// shoppingListService.js

class ShoppingListService {
  constructor(shoppingList, shoppingListActions) {
    this.shoppingList = shoppingList;
    this.shoppingListActions = shoppingListActions;
  }

  addItem(name) {
    this.shoppingList.addItem(name);
    this.shoppingList.render();
  }

  deleteItem(item) {
    this.shoppingListActions.deleteItem(item, this.shoppingList);
  }

  toggleComplete(item) {
    this.shoppingListActions.toggleComplete(item);
  }

  render() {
    this.shoppingList.render();
  }
}

// app.js

const shoppingList = new ShoppingList();
const shoppingListActions = new ShoppingListActions();
const shoppingListService = new ShoppingListService(shoppingList, shoppingListActions);

const newItemForm = document.getElementById('new-item-form');
newItemForm.addEventListener('submit', event => {
  event.preventDefault();
  const newItemInput = document.getElementById('new-item-input');
  const newItemName = newItemInput.value.trim();
  if (newItemName !== '') {
    shoppingListService.addItem(newItemName);
    newItemInput.value = '';
  }
});

function renderShoppingList() {
  shoppingListService.render();
}
