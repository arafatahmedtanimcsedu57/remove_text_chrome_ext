chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let msg = {
		txt: 'remove',
		tab,
	};
	chrome.tabs.sendMessage(tab.id, msg);
}
