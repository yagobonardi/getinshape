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

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".exercise-checkbox");
    const exerciseList = document.querySelector(".exercise-list");

    const congratsMessage = document.createElement("div");
    congratsMessage.textContent = "🎉 Congratulations on completing! 🎉";
    congratsMessage.style.display = "none";
    congratsMessage.style.fontSize = "1.5rem";
    congratsMessage.style.color = "#28a745";
    congratsMessage.style.textAlign = "center";
    document.body.appendChild(congratsMessage);

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const allChecked = Array.from(checkboxes).every((box) => box.checked);

            if (allChecked) {
                exerciseList.style.display = "none";
                congratsMessage.style.display = "block";
            }
        });
    });
});