const qBars = document.querySelectorAll(".q-bar");
const answer = document.querySelectorAll(".a");

qBars.forEach((qbar) => {
  qbar.addEventListener("click", () => {
    const arrow = qbar.parentElement.children[0].children[1];

    for (let i = 0; i < qBars.length; i++) {
      if (qbar.parentElement.children[1].classList.contains("hide")) {
        answer[i].classList.add("hide");
        qbar.parentElement.children[1].classList.remove("hide");
        arrow.classList.add("transform");
      } else if (!qbar.parentElement.children[1].classList.contains("hide")) {
        answer[i].classList.add("hide");
        qbar.parentElement.children[1].classList.add("hide");
        arrow.classList.remove("transform");
      }
    }
    for (let i = 0; i < qBars.length; i++) {
      console.log(
        qBars[i].parentElement.children[1].classList.contains("hide")
      );
      if (qBars[i].parentElement.children[1].classList.contains("hide")) {
        qBars[i].children[0].classList.remove("bold");
      } else if (
        !qBars[i].parentElement.children[1].classList.contains("hide")
      ) {
        qbar.children[0].classList.add("bold");
      }
    }
  });
});
