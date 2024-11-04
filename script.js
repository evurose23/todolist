document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const logoutButton = document.getElementById('logout');

    // Handle login
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === 'admin' && password === '12345') {
                window.location.href = 'main.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    // Fetch todos on the main page
    if (document.getElementById('todoList')) {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                const todoList = document.getElementById('todoList');
                let completedCount = 0;

                todos.forEach(todo => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item';
                    li.innerHTML = `
                        <input type="checkbox" class="mr-2" data-id="${todo.id}">
                        ${todo.title}
                    `;
                    todoList.appendChild(li);
                });

                // Handle checkbox changes
                todoList.addEventListener('change', function (e) {
                    if (e.target.tagName === 'INPUT') {
                        const checkbox = e.target;
                        if (checkbox.checked) {
                            completedCount++;
                        } else {
                            completedCount--;
                        }

                        if (completedCount === 5) {
                            alert(`Congrats. ${completedCount} Tasks have been Successfully Completed`);
                        }
                    }
                });
            });

        // Handle logout
        logoutButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});
