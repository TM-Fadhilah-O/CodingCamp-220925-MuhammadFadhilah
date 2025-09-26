document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("messageForm");
  const resultBox = document.getElementById("Result");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const name = document.getElementById("Nama").value;
    const dob = document.getElementById("DateOfBirth").value;
    const gender = form.Gender.value; 
    const message = document.getElementById("KomenPesan").value;

    resultBox.innerHTML = `
      <h3>Submitted Data:</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;

    
    resultBox.classList.add("show");

    
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const usernameSpan = document.getElementById("username");
  const modal = document.getElementById("nameModal");
  const nameInput = document.getElementById("nameInput");
  const saveBtn = document.getElementById("saveNameBtn");
  const removeBtn = document.getElementById("removeNameBtn");

  
  let name = localStorage.getItem("visitorName");

  if (name) {
    
    usernameSpan.textContent = name;
    modal.style.display = "none";
  } else {
    
    modal.style.display = "flex";
  }


  saveBtn.addEventListener("click", () => {
    const newName = nameInput.value.trim();
    if (newName !== "") {
      localStorage.setItem("visitorName", newName);
      usernameSpan.textContent = newName;
      modal.style.display = "none";
    }
  });

  
  removeBtn.addEventListener("click", () => {
    localStorage.removeItem("visitorName");
    usernameSpan.textContent = "Username";
    modal.style.display = "flex"; 
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const usernameSpan = document.getElementById("username");
  const modal = document.getElementById("nameModal");
  const nameInput = document.getElementById("nameInput");
  const saveBtn = document.getElementById("saveNameBtn");
  const removeBtn = document.getElementById("removeNameBtn");

  let name = localStorage.getItem("visitorName");

  if (!name) {
    modal.style.display = "flex";
  } else {
    usernameSpan.textContent = name;
  }

  saveBtn.addEventListener("click", () => {
    const newName = nameInput.value.trim();
    if (newName !== "") {
      localStorage.setItem("visitorName", newName);
      usernameSpan.textContent = newName;
      modal.style.display = "none";
    }
  });


  removeBtn.addEventListener("click", () => {
    localStorage.removeItem("visitorName");
    usernameSpan.textContent = "Username";
    modal.style.display = "flex"; 
  });
});
