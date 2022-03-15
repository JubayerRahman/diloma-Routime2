var  result = document.querySelector('img');
var department = document.getElementById("dep");
var semester = document.getElementById("sem");


document.getElementById("enter").addEventListener("click" , function(){
    var indepartment = department.value;
    var insemester = semester.value;

    if(indepartment=="Computer science" && insemester=="2nd Semester"){
        var img = document.querySelector('img');
    img.src="CST2nd.jpg";
    }
    else if(indepartment=="Computer science" && insemester=="4th Semester"){
        var img = document.querySelector('img');
    img.src="0001.jpg";
    }
    else if(indepartment=="Computer science" && insemester=="6th Semester"){
        var img = document.querySelector('img');
    img.src="CST6th.jpg";
    }
    else{
        var  result = document.querySelector('img');
      result.src="Sorry The system don't have any routine for your exam.png"
    }
})