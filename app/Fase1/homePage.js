window.addEventListener("load", function () {
	if (typeof window.ethereum !== "undefined") {
		console.log("MetaMask detected");
		let mmDetected = document.getElementById("mm-detected");
		mmDetected.innerHTML = "MetaMask has been detected";
	} else {
		console.log("MetaMask not available");
		this.alert("Install MetaMask");
	}
});

const mmEnable = document.getElementById("btn-connect");

mmEnable.onclick = async () => {
	await ethereum.request({ method: "eth_requestAccounts" });

	const mmCurrentAccount = document.getElementById("mm-current-account");

	mmCurrentAccount.innerHTML = "Account: " + window.ethereum.selectedAddress;
};
