class StudentDetails {
    constructor(data){
        this.name = data.name;
        this.age = data.age;
        this.gender = data.gender;
        this.standard = data.standard;
        this.mathsMarks = data.marks[0];
        this.scienceMarks = data.marks[1];
        this.socialMarks = data.marks[2];
        this.evsMarks = data.marks[3];
        this.totalMarks = 0;
        this.avg = 0;
        this.grade = '';
        this.msg = '';
    }
    getTotalAvg(){
        this.totalMarks =  this.mathsMarks + this.scienceMarks + this.socialMarks + this.evsMarks;
        this.avg = this.totalMarks/4;
    }
    getGrade(){
        if(this.avg > 90){
            this.grade = 'A+'
            this.msg = `${this.name} You are brilliant Student `;
        }else if(this.avg > 80){
            this.grade = 'A'
            this.msg = `${this.name} You are doing good `;
        }else if(this.avg > 70){
            this.grade = 'B'
            this.msg = `${this.name} good , but try to get A grade `;
        }else if(this.avg > 60){
            this.grade = 'C'
            this.msg = `${this.name} Need to work really hard `;
        }else if(this.avg > 50){
            this.grade = 'D'
            this.msg = `${this.name} recommended to join tuitions`;
        }else if(this.avg > 40){
            this.grade = 'E';
            this.msg = `${this.name} You have failed`;

        }else{
            this.grade ='F';
            this.msg = `${this.name} Call your parents `;
        }
    }
    
    displayStudentDetails(){
        this.getTotalAvg();
        this.getGrade();
        $('#dname').text(this.name);
        $('#dage').text(this.age);
        $('#dgen').text(this.gender);
        $('#dclass').text(this.standard);
        $('#dmaths').text(this.mathsMarks);
        $('#dscience').text(this.scienceMarks);
        $('#dsocial').text(this.socialMarks);
        $('#devs').text(this.evsMarks);
        $('#dtotal').text(this.totalMarks);
        $('#davg').text(this.avg.toFixed(2));
        $('#dgrade').text(this.grade);
        $('#dmsg').text(this.msg);

    }
}

var studentList = [];

var readStudentDetails = ()=>{
    var studentDetails = {};
    studentDetails.name = $("#sName").val();
    studentDetails.age = $("#sAge").val();
    studentDetails.gender = $("input[name ='gender']:checked").val();
    studentDetails.standard = $("#sstandard").val();
    studentDetails.marks = [
        parseInt($("#smaths").val()),
        parseInt($("#sscience").val()),
        parseInt($("#ssocial").val()),
        parseInt($("#sevs").val())
    ]

    var studentObject = new StudentDetails(studentDetails);
    studentObject.displayStudentDetails();
    studentList.push(studentObject);
    console.log(studentList);
    $('.progress-container1').show();
}

var handleReset = ()=>{
    $('.progress-container1').hide();
}
$('.btn1').on('click', readStudentDetails);

$('.btn2').on('click',handleReset);