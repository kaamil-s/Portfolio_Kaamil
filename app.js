window.onload = function () {
    document.getElementById("preloader").style.display = "none";
};


// Model viewer initialization
window.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.getElementById('m1');
    const controlDiv = document.querySelector('.animation-controls');

    const actionMap = {
        'Idle_C': 'Idle',
        'Run_Fwd_C': 'Run',
        'Emote_10395002030': 'Fly',
        'Emote_10398002020': 'Flying Hammer',
        '103961_ThunderRelease_Loop': 'Thunder Release',
        'Like_Personality': 'Flex',
        'Sleep': 'Sleep'
    };

    // Default animation on page load
    modelViewer.setAttribute('animation-name', 'Idle_C');

    // Function to highlight active button
    const highlightActiveButton = (activeBtn) => {
        const buttons = controlDiv.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    };

    // Generate animation control buttons
    Object.entries(actionMap).forEach(([action, displayName]) => {
        const btn = document.createElement('button');
        btn.textContent = displayName;
        btn.addEventListener('click', () => {
            modelViewer.setAttribute('animation-name', action);
            highlightActiveButton(btn);
        });
        controlDiv.appendChild(btn);
    });

    // Error handling for model load failure
    modelViewer.addEventListener('error', (err) => {
        console.error('Model failed to load:', err);
        controlDiv.innerHTML = '<p>Failed to load model. Please try again.</p>';
    });
});
