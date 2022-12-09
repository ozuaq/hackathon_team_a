const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';

const btn = document.getElementById('btn');
const content = document.getElementById('content');

btn.addEventListener('click', function () {
    content.innerHTML += '<div>' + 'click!' + '</div>';
    speech.start();
});

speech.onresult = function (e) {
    speech.stop();
    if (e.results[0].isFinal) {
        var autotext = e.results[0][0].transcript
        content.innerHTML += '<div>' + autotext + '</div>';
    }
}

speech.onend = () => {
    speech.start()
};


function voice_reader(){
    var place = "柏";
   /*場所の読み込み Defaultは柏。受け取った位置情報に基づいて、読み上げを行う。
    受け取った位置情報は place に渡すといいかも*/
    var speak = new SpeechSynthesisUtterance();
    speak.text = "まもなく"+place+"です。"
    speechSynthesis.speak(speak);
};