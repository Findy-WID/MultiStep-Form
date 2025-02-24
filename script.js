const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const formSteps = document.querySelectorAll(".form-step");
const formstep2 = document.getElementById("step2");
const formstep4 = document.getElementById("step4");
const formstepthree = document.querySelector(".formstepthree");
const togglePlan = document.getElementById("togglePlan");

let formStepNum = 0

nextBtns.forEach((nextBtn) => {
    nextBtn.addEventListener("click", () => {
        formStepNum ++;
        updateFormState();
    });
});

prevBtns.forEach((prevBtn) => {
    prevBtn.addEventListener("click", () => {
        formStepNum --;
        updateFormState();
    });
});

const updateFormState = () => {
    formSteps.forEach((formStep) => {
        // formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });

formSteps[formStepNum].classList.add("form-step-active")
}

formstepthree.addEventListener("click", () => {
    formstep4.classList.remove("form-step-active");
    formstep2.classList.add("form-step-active");

    formStepNum = 1;
});

togglePlan.addEventListener("change", () => {
    if(togglePlan.checked) {
        document.querySelector(".show").style.display = "none";
        document.querySelector(".hide").style.display = "flex";
    } else {
        document.querySelector(".show").style.display = "flex";
        document.querySelector(".hide").style.display = "none";

    }
    
})

