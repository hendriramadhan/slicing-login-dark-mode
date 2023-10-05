


const checkbox = document.getElementById('checkbox');
const checkboxLabel = document.getElementsByClassName('checkbox-label')[0];
// const checkboxLabel = document.getElementsByClassName('checkbox-label');
const images = document.getElementById('images');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        // Ubah gambar saat slider diaktifkan
        images.src = 'image/Group.png';
        checkboxLabel.classList.toggle('checkbox-label-dark');
        // if (checkboxLabel) {
            
        // }
        
    } else {
        // Kembalikan gambar saat slider dinonaktifkan
        images.src = 'image/Group 1.png';
        checkboxLabel.classList.remove('checkbox-label-dark');
    }
});


