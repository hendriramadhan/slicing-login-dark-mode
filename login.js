const checkbox = document.getElementById('checkbox');
const checkboxLabel = document.getElementsByClassName('checkbox-label')[0];
const images = document.getElementById('images');
const circle = document.getElementsByClassName('circle')[0];
const titleForm = document.getElementsByClassName('title-form')[0];
const formLogin = document.getElementsByClassName('form-login')[0];
const h2 = document.getElementsByTagName('h2')[0];
const link = document.getElementsByTagName('a')[0];
const btn = document.getElementsByClassName('btn')[0];
const input = document.getElementsByClassName('input-field')[0];

checkbox.addEventListener('change', function() {
    
    checkboxLabel.classList.toggle('checkbox-label-dark');
    formLogin.classList.toggle('form-login-dark');
    btn.classList.toggle('btn-dark');

    
    if (checkbox.checked) {
        images.src = 'image/Group.png';
        document.body.style.backgroundColor = '#171717';
        titleForm.style.backgroundColor = '#333333';
        h2.style.color = '#ffffff';
        link.style.color = '#ffffff';
        input.style.color = '#ffffff';
        circle.style.backgroundColor = '#ffffff';
        
        // button.style.color = '#333333';
        
    } else {
        images.src = 'image/Group 1.png';
        document.body.style.backgroundColor = '#ffffff';
        titleForm.style.backgroundColor = '#00ADB5';
        h2.style.color = '#00ADB5';
        link.style.color = '#1E34FF';
        input.style.color = '#333333';
        circle.style.backgroundColor = '#00ADB5';
    }
});


