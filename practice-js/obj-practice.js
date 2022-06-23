//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = {
	name: ["機械システム工学科", "電子システム工学科","情報工学科","デザイン学科"],
	ename: ["Department of Mechanical Systems Engineering","Department of Electronics and Computer Systems","Department of Computer Science","Department of Design"],
};

//////////////// ここから下にプログラムを書きたそう!

console.log(campus.address);    //「八王子市館町」を出力
for (let n of campus.buildingD) {   //D館の教室名
    console.log(n);
}

for (let n of gakka.name) {   //日本語の学科名
    console.log(n);   //n.nameでも出来る
}
