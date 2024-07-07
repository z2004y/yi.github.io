document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                // 登录成功，设置标志
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                document.getElementById('errorMessage').textContent = '用户名或密码错误';
            }
        });
});
