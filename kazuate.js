// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
let i = document.querySelector('input[name="shimei"]');
let yoso = i.value;
let p = document.querySelector('p#result');
let result;
let answer;
result = document.createElement('result');
answer = document.createElement('answer');

answer.textContent = kaisu+'回目の予想：'+yoso;

    let end = 0;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    kaisu = kaisu+1;
    console.log(kaisu+'回目の予想：'+yoso);
if(end < 1) {
    if (kaisu < 3) {
        if (kotae === yoso) {
            console.log('正解です．おめでとう!');
            result.textContent = '正解です．おめでとう!';
            end = end+1;
        } else if (yoso < kotae) {
            console.log('まちがい．答えはもっと大きいですよ');
            result.textContent = 'まちがい．答えはもっと大きいですよ';
        } else {
            console.log('まちがい．答えはもっと小さいですよ');
            result.textContent = 'まちがい．答えはもっと小さいですよ';
        }
    } else {
        console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
        result.textContent = '答えは'+kotae+'でした．すでにゲームは終わっています';
    }
}  else {
        console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
        result.textContent = '答えは'+kotae+'でした．すでにゲームは終わっています';
    }

    if (end < 1 && kaisu < 3) {
            if (kotae === yoso) {
                console.log('正解です．おめでとう!');
                end++;
            } else if (yoso < kotae) {
                console.log('まちがい．答えはもっと大きいですよ');
            } else if (yoso > kotae){
                console.log('まちがい．答えはもっと小さいですよ');
            } else if (kaisu === 3){
                console.log('まちがい．答えは '+kotae+' です');
            }
        }
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    p.insertAdjacentElement('beforeend', answer);
    p.insertAdjacentElement('beforeend', result);
}