document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("messageForm");
  const resultBox = document.getElementById("Result");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop reload

    const name = document.getElementById("Nama").value;
    const dob = document.getElementById("DateOfBirth").value;
    const gender = form.Gender.value; // note: "Gender" matches the radio name
    const message = document.getElementById("KomenPesan").value;

    resultBox.innerHTML = `
      <h3>Submitted Data:</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;

    // fade-in effect
    resultBox.classList.add("show");

    // reset form fields
    form.reset();
  });
});
