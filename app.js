const quiz = [
  {
    question: "フェノメノといえば？",
    answers: [
      "ロベルト・フィルミーノ", 
      "ロナウド", 
      "ネイマール",
      "岡崎慎司"
      ],
    correct: "ロナウド"
  }, {
    question: "皇帝といえば？",
    answers: [
      "ミハエル・バラック", 
      "トニ・クロース", 
      "香川真司",
      "ベッケンバウアー"
      ],
    correct: "ベッケンバウアー"
  }, {
    question: "ワンダーボーイといえば？",
    answers: [
      "マイケル・オーウェン", 
      "カルロス・テベス", 
      "クリスティアーノ・ロナウド",
      "大久保嘉人"
      ],
    correct: "マイケル・オーウェン"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

 //クイズの問題文、選択肢を定義
const setUpQuiz = () => {
 document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex ++;
  }
}
setUpQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
      window.alert("正解！");
      score ++;
    } else {
      window.alert("不正解！");
    }

  quizIndex ++;

  if(quizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setUpQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");

  }
};

  //ボタンをクリックしたら正誤判定
let handlerIndex = 0;

  while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click" , (e) => {
    clickHandler(e);
  });
    handlerIndex ++;
}


  
