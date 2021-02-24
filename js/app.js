const qBars = document.querySelectorAll(".q-bar");
const answer = document.querySelectorAll(".a");

qBars.forEach((qbar) => {
  qbar.addEventListener("click", () => {
    for (let i = 0; i < qBars.length; i++) {
      if (qbar.parentElement.children[1].classList.contains("hide")) {
        answer[i].classList.add("hide");
        qbar.parentElement.children[1].classList.remove("hide");
      } else if (!qbar.parentElement.children[1].classList.contains("hide")) {
        answer[i].classList.add("hide");
        qbar.parentElement.children[1].classList.add("hide");
      }
    }
    for (let i = 0; i < qBars.length; i++) {
      const arrow = qBars[i].parentElement.children[0].children[1];

      if (qBars[i].parentElement.children[1].classList.contains("hide")) {
        qBars[i].children[0].classList.remove("bold");
        arrow.classList.remove("transform");
      } else if (
        !qBars[i].parentElement.children[1].classList.contains("hide")
      ) {
        qbar.children[0].classList.add("bold");
        arrow.classList.add("transform");
      }
    }
  });
});
