const password = document.getElementById('password');
const toggle = document.getElementById('toggle');

toggle.onclick = function(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        toggle.classList.add('hide');
        toggle.innerHTML='<i class="far fa-eye-slash"></i>';
    }
    else{
        password.setAttribute('type','password');
        toggle.classList.remove('hide');
        toggle.innerHTML='<i class="far fa-eye">';
    }
}

