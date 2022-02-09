const logBtn = document.querySelector('#log');
const removeBtn = document.querySelector('#remove');

const handleLogSubmit = event => {
    event.preventDefault();
    if(logBtn.innerHTML != 'Log Sample'){
        logBtn.innerHTML = 'Log Sample';
        logBtn.style.backgroundColor='#419fd9';        
        console.log('unclick sub');
    }
    else {
        logBtn.innerHTML = 'Sample Submitted';
        logBtn.style.backgroundColor='gray';        
        console.log('click sub')
    }
}


// const handleRemoveSubmit = event => {
//     event.preventDefault();
//     if (removeBtn.textContent = )
//     console.log('removed sample submission');
// }

logBtn.addEventListener('click', handleLogSubmit);
// removeBtn.addEventListener('click', handleRemoveSubmit);
