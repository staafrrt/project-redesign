document.addEventListener('DOMContentLoaded', function() {

    const progressBar = document.getElementById('progress-bar');
    const steps = document.querySelectorAll('.step');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentStep = 1;

    nextButton.addEventListener('click', () => {
        currentStep++;
        if (currentStep > steps.length) {
            currentStep = steps.length;
        }
        updateProgress();
    });

    prevButton.addEventListener('click', () => {
        currentStep--;
        if (currentStep < 1) {
            currentStep = 1;
        }
        updateProgress();
    });

    function updateProgress() {
        steps.forEach((step, idx) => {
            if (idx < currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

});