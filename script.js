// 페이지 로드 시 이전 상태 복원
document.addEventListener("DOMContentLoaded", (event) => {
    const bkts = document.querySelectorAll(".bkt");
    bkts.forEach((bkt, index) => {
        // 로컬 스토리지에서 상태 읽기
        const isDone = localStorage.getItem("bkt" + index) === "done";
        if (isDone) {
            bkt.classList.add("done");
        }
    });
});

// 버킷 리스트 클릭 이벤트
const bkts = document.querySelectorAll(".bkt");
bkts.forEach((bkt, index) => {
    bkt.addEventListener("click", function () {
        // 클래스 토글
        bkt.classList.toggle("done");

        // 로컬 스토리지에 상태 저장
        if (bkt.classList.contains("done")) {
            localStorage.setItem("bkt" + index, "done");
        } else {
            localStorage.setItem("bkt" + index, "");
        }
    });
});

$(document).ready(function () {
    let i = 1; // 변수설정은 함수의 바깥에 설정!
    $("#bkt_submit").click(function () {
        // id가 bkt_submit인 요소의 값을 가져옴
        let msg = $("#bkt_submit").val();
        // 가져온 값이 있는지 확인
        if (msg.trim() !== "") {
            // 값이 있으면 박스에 추가
            $("#boxWrap").append("<div class='bkt img6-t5 center'>" + msg + "</div>");
            i++; // 함수 내 하단에 증가문 설정
        }
    });
});
