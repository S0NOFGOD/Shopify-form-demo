function nextQuestion(current) {
    let selected = document.querySelector('input[name="location"]:checked');
    if (current === 1 && selected) {

        document.getElementById('question1').classList.add('hidden');

        document.getElementById('question2').classList.remove('hidden');
    } else {
        alert("Please answer the question to proceed.");
    }
}

function showResult() {
    let location = document.querySelector('input[name="location"]:checked').value;
    let coldLevel = document.querySelector('input[name="cold"]:checked').value;

    let resultMessage = `You live in ${location} and feel ${coldLevel}.`;

    document.getElementById('question2').classList.add('hidden');

    document.getElementById('result').classList.remove('hidden');

    document.getElementById('result-message').textContent = resultMessage;
}