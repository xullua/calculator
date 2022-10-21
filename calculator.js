"use strict";

let answer = "";


let clearflag = false;
let enzan = "";
let dot = false;
let errorflag = false;
let cflag = false;


$(function () {
  $("#clear").click(function () {
    if (cflag == true) {
      $("#answer").val("");
      cflag = false;
      $("#clear").val("AC");
      $(".button").prop("disabled", false);
      console.log(answer);
    }
    else if (cflag == false) {
      $("#answer").val("");
      answer = "";
      $("#clear").val("AC");
      enzan = "";
      $("#dot").prop("disabled", false);
      $(".button").prop("disabled", false);
      dot = false;
      clearflag = false;
      errorflag = false;
      console.log(answer);
    }
  });
});

$(function () {
  $(".button").click(function () {
    if ($("#answer").val().length >= 10) {
      $(".button").prop("disabled", true);
      $("#answer").val("error!");
    } else {
      if (clearflag === true) {
        $("#answer").val("");
        clearflag = false;
        $("#dot").prop("disabled", false);
      }
    }

    $("#clear").val("C");
    Number($("#answer").val($("#answer").val() + $(this).val()));
    cflag = true;
  });
});

$(function () {
  $("#dot").on("click", function () {
    $("#dot").prop("disabled", true);
    Number($("#answer").val($("#answer").val() + $(this).val()));
  });
});

$(function () {
  $("#addition").click(function () {
    enzanClick("+")
  });
});

$(function () {
  $("#substraction").click(function () {
    enzanClick("-")
  });
});

$(function () {
  $("#multiplication").click(function () {
    enzanClick("×")
  });
});

$(function () {
  $("#devision").click(function () {
    enzanClick("÷")
  });
});

$(function () {
  $("#percent").click(function () {
    $("#answer").val(Number($("#answer").val()) * 0.01);
  });
});

$(function () {
  $("#plusminus").click(function () {
    $("#answer").val(Number($("#answer").val()) * (-1));
  });
});

function enzanClick(kigou) {
  if (enzan === "") {
    answer = Number($("#answer").val());
  } else {
    enzanClick1()
  }
  digit()

  clearflag = true;
  enzan = kigou;
}

function enzanClick1() {
  if (enzan === "+") {
    answer += Number($("#answer").val());
  } else if (enzan === "-") {
    answer -= Number($("#answer").val());
  } else if (enzan === "×") {
    answer *= Number($("#answer").val());
  } else if (enzan === "÷") {
    answer /= Number($("#answer").val());
  }
}

$(function () {
  $("#equal").click(function () {
    enzanClick1()
    digit()

    clearflag = false;
    cflag = false;
    $("#clear").val("AC");
  });
});

function digit() {
  let num1 = String(answer).split(".");

  if (num1[0].length > 10) {
    $("#answer").val("error!");
    errorflag = true;
  }
  else if (String(answer).length >= 10 && num1[0].length <= 10) {
    let n = 10 - num1[0].length;
    answer = Number(answer).toFixed(n);
    $("#answer").val(answer);
  } else {
    $("#answer").val(answer);
  }
}