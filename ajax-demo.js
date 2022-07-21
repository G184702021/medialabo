let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);
// 通信を開始する処理
function sendRequest() {
	//let p1 = document.querySelector('p#access');
	//let p2 = document.querySelector('p#address');
	let i = document.querySelector('input[name="kaitou"]');
	let genre = i.value;
	//genre = 'G004';
	// URL を設定
	//let url = 'https://www.nishita-lab.org/web-contents/jsons/test.json';
	let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
		//p1.textContent = access;
		//p2.textContent = address;
		let p1 = document.querySelector('p#access');
		let p2 = document.querySelector('p#address');
		//let p3 = document.querySelector('p#budget.name');
		//let p4 = document.querySelector('p#catch');
		//let p5 = document.querySelector('p#genre.name');
		//let p6 = document.querySelector('p#name');
		//let p7 = document.querySelector('p#open');
		//let p8 = document.querySelector('p#station_name');
		//let p9 = document.querySelector('p#subgenre.name');


		p1.textContent = access;
		p2.textContent = address;
		//p3.textContent = budget.name;
		//p4.textContent = catc;
		//p5.textContent = genre.name;
		//p6.textContent = nam;
		//p7.textContent = ope;
		//p8.textContent = station_name;
		//p9.textContent = subgenre.name;
		console.log(Array[3]);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);

}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
