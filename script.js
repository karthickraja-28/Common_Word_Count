function findMostCommonWords(text, numberOfWords = 3) {
	const wordFrequency = {};
	const words = text.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)*/g) || [];

	for (const word of words) {
		wordFrequency[word] = (wordFrequency[word] || 0) + 1;
	}

	return Object.entries(wordFrequency)
		.sort((first, second) => second[1] - first[1] || first[0].localeCompare(second[0]))
		.slice(0, numberOfWords);
}

const textInput = document.getElementById("textInput");
const countButton = document.getElementById("countButton");
const result = document.getElementById("result");

function displayMostCommonWords() {
	const mostCommonWords = findMostCommonWords(textInput.value);
	result.innerHTML = "";

	if (mostCommonWords.length === 0) {
		result.innerHTML = "<li>No words found.</li>";
		return;
	}

	for (const [word, count] of mostCommonWords) {
		const listItem = document.createElement("li");
		listItem.textContent = `${word}: ${count}`;
		result.appendChild(listItem);
	}
}

countButton.addEventListener("click", displayMostCommonWords);
displayMostCommonWords();