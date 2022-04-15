function dateCipherRenderer() {
    const form = document.querySelector("#dateCipher");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const input = event.target["dateCipher-input"].value;
      const direction = event.target["dateCipher-options"].value;
      const date = event.target["dateCipher-date"].value;
      const result =
        direction === "encode"
          ? dateCipherModule.dateCipher(input, date)
          : dateCipherModule.dateCipher(input, date, false);
  
      const alert = document.querySelector("#dateCipher-alert");
      if (result) {
        alert.classList.add("d-none");
        const output = document.querySelector("#dateCipher-output");
        output.innerHTML = result;
      } else {
        alert.classList.remove("d-none");
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", dateCipherRenderer);