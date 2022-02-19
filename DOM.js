document.getElementById('add-border').addEventListener('click',function(){
    let container = document.getElementById('friend-container');
    container.style.border = '2px solid black'; 
    container.style.padding = '10px'; 
    container.style.marginBottom = '10px'; 

});
function addBackgroundColor(){
    let friends = document.getElementsByClassName('friend');
    for(let friend of friends){
        friend.style.backgroundColor = 'skyblue';
    }
};
document.getElementById('add-friend').addEventListener('click',function(){
    let container = document.getElementById('friend-container');
    let friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h3 class="friend-name">new friend</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, harum.</p>
    `;
    container.appendChild(friendDiv);
})