// Progress of Skills
let Skills_section = document.querySelector(".skills .box-content");
let the_progress = document.querySelectorAll(".the-progress span");

// State of Skills
let state_section = document.querySelector(".state");
let the_state_counter = document.querySelectorAll(".state .row span.number");
let stop = false;

document.addEventListener("scroll", function () {
  // Start Progress
  if (window.scrollY >= Skills_section.offsetTop - 500) {
    the_progress.forEach((span) => {
      progress_width = span.getAttribute("progress-width");
      span.style.width = `${progress_width}`;
    });
  }
  //   End Progress

  // Start State
  if (window.scrollY >= state_section.offsetTop - 200) {
    if (!stop) {
      the_state_counter.forEach((span) => {
        let goal = span.dataset.goal;
        let counter = setInterval(() => {
          span.innerHTML++;
          if (span.innerHTML == goal) {
            // console.log(goal);
            clearInterval(counter);
          }
        }, 13);
      });
    }
    stop = true;
  }
});
