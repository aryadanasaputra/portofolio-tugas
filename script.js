document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulasi pengiriman data
    console.log(`Nama: ${name}, Email: ${email}, Pesan: ${message}`);

    // Menampilkan status setelah submit
    document.getElementById('form-status').textContent = 'Pesan Anda telah terkirim. Terima kasih!';

    // Mengosongkan form
    document.getElementById('contact-form').reset();
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("form-status").innerText = "Pesan berhasil dikirim!";
});

// Menampilkan detail proyek dalam pop-up
document.querySelectorAll('.project-card button').forEach(button => {
    button.addEventListener('click', function () {
        let projectName = this.parentElement.querySelector('h3').innerText;
        let projectDescription = this.parentElement.querySelector('p').innerText;
        showPopup(projectName, projectDescription);
    });
});

function showPopup(title, description) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="close-btn">Tutup</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Tutup pop-up
    popup.querySelector('.close-btn').addEventListener('click', () => {
        popup.remove();
    });
}
