//시간별 색 변화
function time(){
  var d = new Date();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var Box = document.getElementById('box');
  var Text = document.getElementById('text');

  if(hour > 12 && hour <= 13) {
	Box.style.backgroundColor = "red";
	Text.innerText = "양호";
    }
  else if(hour > 11 && hour <= 12) {
	Box.style.backgroundColor = "yellow";
	Text.innerText = "바쁨";
  }
  else if(hour > 13 && hour <= 14) {
	Box.style.backgroundColor = "yellow";
	Text.innerText = "혼잡";
  }
  else {
	Box.style.backgroundColor = "green";
	Text.innerText = "양호";
  }
}

document.getElementById('button').addEventListener("click", prom);

function prom() {
  var Text2 = document.getElementById('text2');
  var Prompt1 = prompt("사장님의 생일은?");
	if (Prompt1 == "0327") {
      var Prompt2 = prompt("이벤트 칸 소개글 편집");
  	  localStorage.setItem('key', Prompt2);
	  document.getElementById('text2').innerText = localStorage.getItem('key');
	}
	else {
	  alert("수정 권한이 없는 사용자입니다.");
	}
}
