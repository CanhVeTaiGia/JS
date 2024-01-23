const userList = document.getElementById('user-list');
const inputField = document.getElementById('input-field');
const editItemButton = document.getElementById('edit-item-button');
userList.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-button')) {
    const userName = event.target.previousElementSibling.textContent;
    inputField.value = userName;
    inputField.disabled = false;
    event.target.disabled = true;
  }
});

editItemButton.addEventListener('click', () => {
  const newUserName = inputField.value;
  const userItems = userList.getElementsByClassName('user-item');
  for (let i = 0; i < userItems.length; i++) {
    const userNameSpan = userItems[i].getElementsByClassName('user-name')[0];
    if (userItems[i].getElementsByClassName('edit-button')[0].disabled) {
      userNameSpan.textContent = newUserName;
    }
  }
  inputField.disabled = true;
  editItemButton.disabled = true;
  setTimeout(() => {
    editItemButton.disabled = false;
  }, 100);
});