const questions = document.querySelectorAll(".accordion-header");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    let value = question.classList.value.split(" ")[1];

    const qns = document.querySelectorAll(".accordion-container p");

    const links = document.querySelectorAll(".accordion-header a");

    const arrows = document.querySelectorAll(".accordion-header img");

    qns.forEach((qn) => {
      if (!qn.classList.contains(`${value}-p`)) {
        qn.classList.add("hidden");
      }
    });

    links.forEach((link) => {
      link.classList.remove("bold");
    });

    arrows.forEach((arrow) => {
      arrow.classList.remove("open");
    });

    document.querySelector(`.${value} a`).classList.toggle("bold");
    document.querySelector(`.${value} img`).classList.toggle("open");
    document.querySelector(`.${value}-p`).classList.toggle("hidden");
  });
});
