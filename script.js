const form = {}

function getValues(e) {
  const elements = Array.prototype.slice.call(e.target.elements);

  elements.forEach((el) => {
    if (el.type !== "submit") {
      form[el.name] = el.value;
    }
  });

  localStorage.setItem('form', JSON.stringify(form));
}  

document.getElementById("myform").addEventListener("submit", getValues);