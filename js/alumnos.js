{/* <input type="text" id="myInput"> */}


    const input = document.getElementById('matricula');
    input.addEventListener('input', function() {
        this.value = this.value.toUpperCase();
});
