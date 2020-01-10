window.onload=function(){
  console.log("%c 이 확장프로그램은 JIRA에서 클릭하면 편집이 되는 기능을 해제합니다.",
    "background: aliceblue;");
  var userContentBlock = document.querySelectorAll("div.user-content-block")[0];

  if (userContentBlock) {
    document.querySelectorAll("div.user-content-block")[0].addEventListener("click", function(e) {
      e.stopPropagation();
    });
  }

  var jeRdata = document.querySelectorAll("div.je_rdata");
  console.log(jeRdata);

  if (jeRdata) {
    jeRdata.forEach(function(elem) {
      elem.addEventListener("click", function(e) {
        e.stopPropagation();
      });
    })
  }
}