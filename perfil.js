'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    document.body.appendChild(input);

    const profileImage = document.getElementById('profile-image');
    const changePhotoBtn = document.getElementById('change-photo');

    changePhotoBtn.addEventListener('click', function () {
        input.click();
    });

    input.addEventListener('change', function () {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                profileImage.src = reader.result;
            };
        }
    });
});
