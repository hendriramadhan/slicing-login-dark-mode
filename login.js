


const checkbox = document.getElementById('checkbox');
const checkboxLabel = document.getElementsByClassName('checkbox-label')[0];
// const checkboxLabel = document.getElementsByClassName('checkbox-label');
const images = document.getElementById('images');
const circle = document.getElementsByClassName('circle')[0];

checkbox.addEventListener('change', function() {
    
    checkboxLabel.classList.toggle('checkbox-label-dark');
    circle.classList.toggle('circle-dark');
    if (checkbox.checked) {
        // Ubah gambar saat slider diaktifkan
        images.src = 'image/Group.png';
        // if (checkboxLabel) {
            
        // }
        
    } else {
        // Kembalikan gambar saat slider dinonaktifkan
        images.src = 'image/Group 1.png';
        // circle.classList.remove('circle-dark');
        // checkboxLabel.classList.remove('checkbox-label-dark');
    }
});


