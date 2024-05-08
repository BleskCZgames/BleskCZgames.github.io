const poznamkyElement = document.getElementById("poznamky");
const novaPoznamkaForm = document.getElementById("nova_poznamka");

novaPoznamkaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const textPoznamky = e.target.elements.text.value;
  e.target.elements.text.value = "";

  pridatPoznamku(textPoznamky);
});

function pridatPoznamku(text) {
  const poznamkaElement = document.createElement("div");
  poznamkaElement.classList.add("poznamka");

  const textElement = document.createElement("p");
  textElement.textContent = text;

  const tlacitkoOdstranit = document.createElement("button");
  tlacitkoOdstranit.textContent = "Odstranit";
  tlacitkoOdstranit.addEventListener("click", () => {
    poznamkaElement.parentNode.removeChild(poznamkaElement);
  });

  const tlacitkoUpravit = document.createElement("button");
  tlacitkoUpravit.textContent = "Upravit";
  tlacitkoUpravit.addEventListener("click", () => {
    zobrazitFormularUpravitPoznamku(poznamkaElement);
  });

  poznamkaElement.appendChild(textElement);
  poznamkaElement.appendChild(tlacitkoOdstranit);
  poznamkaElement.appendChild(tlacitkoUpravit);

  poznamkyElement.appendChild(poznamkaElement);
}

function zobrazitFormularUpravitPoznamku(poznamkaElement) {
  const textElement = poznamkaElement.querySelector("p");
  const text = textElement.textContent;

  const formularUpravit = document.createElement("form");
  formularUpravit.classList.add("upravit-poznamku");

  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.name = "text";
  inputText.value = text;

  const tlacitkoUlozit = document.createElement("button");
  tlacitkoUlozit.textContent = "Uložit";
  tlacitkoUlozit.addEventListener("click", () => {
    const novyText = inputText.value;
    upravitPoznamku(poznamkaElement, novyText);
  });

  const tlacitkoZrusit = document.createElement("button");
  tlacitkoZrusit.textContent = "Zrušit";
  tlacitkoZrusit.addEventListener("click", () => {
    formularUpravit.parentNode.removeChild(formularUpravit);
  });

  formularUpravit.appendChild(inputText);
  formularUpravit.appendChild(tlacitkoUlozit);
  formularUpravit.appendChild(tlacitkoZrusit);

  poznamkaElement.appendChild(formularUpravit);
}

function upravitPoznamku(poznamkaElement, text) {
  const textElement = poznamkaElement.querySelector("p");
  textElement.textContent = text;

  poznamkaElement.querySelector(".upravit-poznamku").parentNode.removeChild(poznamkaElement.querySelector(".upravit-poznamku"));
}

// Načtení uložených poznámek z úložiště (např. localStorage)

zobrazitPoznamky(localStorage);