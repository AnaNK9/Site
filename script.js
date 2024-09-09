//login//
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Verifica se o usuário está logado e atualiza a interface
    function checkLoginStatus() {
        const user = localStorage.getItem('user');
        const loginStatus = document.getElementById('loginStatus');
        const userAction = document.getElementById('userAction');

        if (user) {
            loginStatus.textContent = `Bem-vindo, ${user}!`;
            userAction.textContent = 'Logout';
            userAction.href = '#';
            userAction.onclick = () => logout();
        } else {
            loginStatus.textContent = 'Você não está logado.';
            userAction.textContent = 'Login/Cadastro';
            userAction.href = 'login.html';
        }
    }

    // Função de Logout
    function logout() {
        localStorage.removeItem('user');
        window.location.href = 'index.html', 'quartos.html';
        
    }

    // Validação de Login
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const loginError = document.getElementById('loginError');

            // Verifica login (exemplo de validação simples)
            if (email === 'usuario@exemplo.com' && password === 'senha123') {
                localStorage.setItem('user', 'Usuário Exemplo');
                window.location.href = 'index.html', 'quartos.html';
                
            } else {
                loginError.textContent = 'Email ou senha incorretos.';
            }
        });
    }

    // Validação de Cadastro
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('signupUsername').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const signupError = document.getElementById('signupError');

            if (password !== confirmPassword) {
                signupError.textContent = 'As senhas não coincidem.';
            } else {
                localStorage.setItem('user', username);
                alert(`Usuário ${username} cadastrado com sucesso!`);
                window.location.href = 'index.html', 'quartos.html';
                
            }
        });
    }

    // Verifica o status de login na página inicial
    if (document.getElementById('loginStatus')) {
        checkLoginStatus();
    }
});






//menu//

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const quantidadeInput = this.nextElementSibling.nextElementSibling;
      if (this.checked) {
        quantidadeInput.disabled = false;
      } else {
        quantidadeInput.disabled = true;
        quantidadeInput.value = 1; // Reset to 1 when unchecked
      }
    });
  });
  
  document.getElementById("pedidoForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Obter os itens selecionados
    const itensSelecionados = document.querySelectorAll('input[name="item"]:checked');
    if (itensSelecionados.length === 0) {
      alert("Selecione pelo menos um item para fazer o pedido.");
      return;
    }
  
    // Exibir resumo do pedido
    const pedidoResumo = document.getElementById("pedidoResumo");
    let resumoHtml = "<h2>Resumo do Pedido</h2><ul>";
    let total = 0;
  
    itensSelecionados.forEach((item) => {
      const nomeItem = item.value;
      const precoItem = parseFloat(item.getAttribute("data-preco"));
      const quantidade = parseInt(item.nextElementSibling.nextElementSibling.value);
      const precoTotalItem = precoItem * quantidade;
      resumoHtml += `<li>${quantidade}x ${nomeItem} - R$ ${precoTotalItem.toFixed(2)}</li>`;
      total += precoTotalItem;
    });
  
    resumoHtml += `</ul><p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>`;
    pedidoResumo.innerHTML = resumoHtml;
    pedidoResumo.style.display = "block";
  });
  



//contato//

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
