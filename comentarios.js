function addComment() {

    const commentText = document.getElementById('comment-input').value;

 

    if (commentText.trim() !== '') {

        const commentDiv = document.createElement('div');

        commentDiv.className = 'comment';

        commentDiv.innerHTML = `<p>${commentText}</p>`;

 

        const commentsContainer = document.querySelector('.comments');

        commentsContainer.appendChild(commentDiv);

 

 

        document.getElementById('comment-input').value = '';

    }

}

 

 

document.getElementById('add-comment').addEventListener('click', addComment);

 

 

document.getElementById('comment-input').addEventListener('keydown', function (event) {

    if (event.key === 'Enter' && !event.shiftKey) {

        event.preventDefault();

        addComment();

    }

});