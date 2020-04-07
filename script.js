
var formulaInput = document.getElementById("formula-input");
var calcHistDiv = document.getElementById("calc-history");

// 키보드 입력값이 Enter 인지 확인
formulaInput.addEventListener("keyup", function(e) {
  if(e.code === "Enter")
    calculate; /* 맞으면 calulate 함수 실행 */
});

function calculate () { /* {} 열고 닫는거 확인 할 것!!! */

  // 입력칸의 문자열이 사칙연산 형식이 맞는지 확인
  var fm = formulaInput.value;
  var fomulaRegex = /^\d+(.\d+)?[+\-*/]{1}\d+(.\d+)?$/;
  var fomulaValid = formulaRegex.test(fm);

var resultText = "no";
if (fomulaValid) {
  // 형식에 맞을 시 식을 계산하고 결과 문자열을 생성
  var answer;
  eval('answer=' + fm);
  resultText = fm + " = ";
  resultText += ( answer % 1 > 0 ? answer.toFixed(2) : answer.toString());
}

// calc-history 상자에 넣을 또 다른 상자를 생성하고 내용을 설정한 뒤 삽입
var resultDiv = document.createElement("DIV");
// appendChild -> 자식 노드의 마지막에 노드가 삽입됨
// createTextNode -> createTextNode.html 참고
resultDiv.appendChild(document.createTextNode(resultText));

if(!formulaValid)
  /* classList -> HTML5 부터 요소의 class 조작을 위해 
  속성값을 간단하게 변경가능 (뒤에 메서드 추가 가능) */
  /* add(string) -> 목록에 문자열을 추가
    toggle(string) -> 목록에 문자열이 있으면 제거, 없으면 추가 
    item(index) -> 인덱스를 지정하여 문자열을 얻음 */
  resultDiv.classList.add("invalid");
/* insertBefore(참조노드(삽입하려는 노드), 특정부모노드의 자식노드(삽입 기준노드)) 
-> 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입 */
calcHistDiv.insertBefore(resultDiv, calcHistDiv.firstChild);

// 입력칸을 빈칸으로 설정
  formulaInput.value = "";

} /* {} 열고 닫는거 확인 할 것!!! */