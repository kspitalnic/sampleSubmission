const logBtn = document.querySelector('#log');
const removeBtn = document.querySelector('#remove');

// function handleLogSubmit(event) {
//     event.preventDefault();
//     console.log("submitted sample");
// }

// function handleRemoveSubmit(event) {
//     event.preventDefault();
//     console.log("removed sample");
// }

const handleLogSubmit = event => {
    event.preventDefault();
    console.log('Sample submitted');
}
const handleRemoveSubmit = event => {
    event.preventDefault();
    console.log('removed sample submission');
}

logBtn.addEventListener('click', handleLogSubmit);
removeBtn.addEventListener('click', handleRemoveSubmit);
