console.log('Chrome extension is ready to remove text');

chrome.runtime.onMessage.addListener(removeText);

function removeText(message) {
	console.log(message);

	if (message.txt === 'remove') {
		let paragraphs = document.getElementsByTagName('p');
		for (let i = 0; i < paragraphs.length; i++) {
			paragraphs[i].innerHTML = '';
		}

		let bolds = document.getElementsByTagName('b');
		for (let i = 0; i < bolds.length; i++) {
			bolds[i].innerHTML = '';
		}

		let headlines_1 = document.getElementsByTagName('h1');
		for (let i = 0; i < headlines_1.length; i++) {
			headlines_1[i].innerHTML = '';
		}

		let headlines_2 = document.getElementsByTagName('h2');
		for (let i = 0; i < headlines_2.length; i++) {
			headlines_2[i].innerHTML = '';
		}

		let headlines_3 = document.getElementsByTagName('h3');
		for (let i = 0; i < headlines_3.length; i++) {
			headlines_3[i].innerHTML = '';
		}

		let headlines_4 = document.getElementsByTagName('h4');
		for (let i = 0; i < headlines_4.length; i++) {
			headlines_4[i].innerHTML = '';
		}

		let headlines_5 = document.getElementsByTagName('h5');
		for (let i = 0; i < headlines_5.length; i++) {
			headlines_5[i].innerHTML = '';
		}

		let headlines_6 = document.getElementsByTagName('h6');
		for (let i = 0; i < headlines_6.length; i++) {
			headlines_6[i].innerHTML = '';
		}

		let anchors = document.getElementsByTagName('a');
		for (let i = 0; i < anchors.length; i++) {
			anchors[i].innerHTML = '';
		}

		let spans = document.getElementsByTagName('span');
		for (let i = 0; i < spans.length; i++) {
			spans[i].innerHTML = '';
		}
	}
}
