document.querySelectorAll('.exercise-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const exerciseItem = event.target.closest('.exercise-item');
        if (event.target.checked) {
            exerciseItem.classList.add('exercise-completed');
        } else {
            exerciseItem.classList.remove('exercise-completed');
        }
    });
});