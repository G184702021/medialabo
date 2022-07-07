// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
let i = document.querySelector('input[name="shimei"]');
let yoso = i.value;
let p1 = document.querySelector('p#answer');
let p2 = document.querySelector('p#result');
let result;

    let end = 0;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    kaisu = kaisu+1;
    console.log(kaisu+'回目の予想：'+yoso);
    let answer = kaisu+'回目の予想：'+yoso;
if(end < 1) {
    if (kaisu < 3) {
        if (kotae === yoso) {
            console.log('正解です．おめでとう!');
            result = '正解です．おめでとう!';
            end = end+1;
        } else if (yoso < kotae) {
            console.log('まちがい．答えはもっと大きいですよ');
            result = 'まちがい．答えはもっと大きいですよ';
        } else {
            console.log('まちがい．答えはもっと小さいですよ');
            result = 'まちがい．答えはもっと小さいですよ';
        }
    } else {
        console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
        result = '答えは'+kotae+'でした．すでにゲームは終わっています';
    }
}  else {
        console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
        result = '答えは'+kotae+'でした．すでにゲームは終わっています';
    }
    p1.textContent = answer;
    p2.textContent = result;
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

}