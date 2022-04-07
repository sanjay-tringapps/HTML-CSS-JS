let data=[];
let t=0;
print();

var count;
var regName;
var firstname;
var lastname;
var course;
var gender;
var phonenumber;
var phonelength;
var email;
var address;
var frontend;
var backend;
var fullstack;



function temporary()
{
document.getElementById("lastspan").innerHTML="";
document.getElementById("genderspan").innerHTML="";
document.getElementById("phonespan").innerHTML="";
document.getElementById("emailspan").innerHTML="";
document.getElementById("developerspan").innerHTML="";
document.getElementById("firstspan").innerHTML="";

    count=1;
    regName = /^[a-zA-Z]+$/;
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    course=document.getElementById("course").value;
    phonenumber=document.getElementById("phonenumber").value;
    phonelength=phonenumber.toString().length;
    email=document.getElementById("email").value;
    address=document.getElementById("address").value;
    frontend=document.getElementById("frontend");
    backend=document.getElementById("backend");
    fullstack="no";
}

function myFunction(){
 
    temporary();

if (!regName.test(firstname)) {
   count=0;
   document.getElementById("firstspan").innerHTML="  invalid firstname";} 

if (!regName.test(lastname)){
    count=0;
    document.getElementById("lastspan").innerHTML="  invalid lastname";} 


if(!document.getElementById('male').checked && !document.getElementById('female').checked) {   
		 document.getElementById("genderspan").innerHTML="gender is not selected";
         count=0;} 
else if(document.getElementById('male').checked){
    gender="MALE";}
else{
    gender="FEMALE";}

if(phonelength!=10){
    count=0;
    document.getElementById("phonespan").innerHTML="phone number must be in 10 digits";}

if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
  document.getElementById("emailspan").innerHTML="  enter valid email address";
  count=0;}

if (frontend.checked && backend.checked){
   frontend.value="yes";
   backend.value="yes";
   fullstack="yes";}
if (!frontend.checked && !backend.checked){
    frontend.value="no";
    backend.value="no";
    count=0;
    document.getElementById("developerspan").innerHTML="  please select the developer role";}
if(frontend.checked && !backend.checked){
    frontend.value="yes";
    backend.value="no";}
if(!frontend.checked && backend.checked){
    frontend.value="no";
    backend.value="yes";}

if(count==1){
    let temp={
        "firstname":firstname,
        "lastname":lastname,
        "name":firstname+" "+lastname,
        "course":course,
        "gender":gender,
        "phone":phonenumber,
        "address":address,
        "email":email,
        "fullstack":fullstack,
        "frontend":frontend,
        "backend":backend
        };
    data.push(temp);
    document.getElementById("myForm").reset();}
  print();
  if(count==1){
  return true;}
}



function remove(o)
{
	var dele = o.parentNode.parentNode.rowIndex;
	dele=dele-1;
    data.splice(dele,1);
	print();
}


function edit(o)
{
    document.getElementById("myForm").reset();
    var index = o.parentNode.parentNode.rowIndex;
    document.getElementById("firstname").value=data[index-1].firstname;
    document.getElementById("lastname").value=data[index-1].lastname;
    document.getElementById("course").value=data[index-1].course;
    if(data[index-1].gender=="MALE")
    {
    document.getElementById("male").checked = true;
    }
    else
    {
    document.getElementById("female").checked = true;
    }
    document.getElementById("phonenumber").value=data[index-1].phone;
    document.getElementById("address").value=data[index-1].address;
    document.getElementById("email").value=data[index-1].email;
    if(data[index-1].fullstack=="yes")
    {
     document.getElementById("frontend").checked = true;
     document.getElementById("backend").checked = true;
    }
    else if(data[index-1].frontend=="yes")
    {
    document.getElementById("frontend").checked = true;
    }
    else
    {
    document.getElementById("backend").checked = true;
    }
    var sub = document.getElementById("submitbtn");
    sub.style.display = "none";
    var upd = document.getElementById("updatebtn");
    upd.style.display = "block";
    document.getElementById("updatebtn").value=index;
}


function myUpdate()
{

    if(myFunction())
    {
        var temp=document.getElementById("updatebtn").value;
        temp=temp-1;
        data.splice(temp,1);
        document.getElementById("submitbtn").style.display="block";
        document.getElementById("updatebtn").style.display="none";
        document.getElementById("myForm").reset();
    }
    print();
}




function print()
{
    var HTML = "<table border=1 width=100%><tr><th>Name</th><th>Course</th><th>Gender</th><th>Phone</th><th>Address</th><th>Email</th><th>FullStack</th><th>EDIT</th><th>DELETE</th></tr>";
    for(let datas of data)
    {
      HTML+="<tr>";
      HTML += "<td>"+datas.name+"</td>"+"<td>"+datas.course+"</td>"+"<td>"+datas.gender+"</td>"+"<td>"+datas.phone+"</td>"+"<td>"+datas.address+"</td>"+"<td>"+datas.email+"</td>"+"<td>"+datas.fullstack+"</td>";
      HTML+="<td><button type="+"button"+" onClick="+"edit(this)"+">EDIT</td>";
      HTML+="<td><button type="+"button"+" onClick="+"remove(this)"+">DELETE</td>";
      HTML+="</tr>";
    }
    HTML += "</table>";
    document.getElementById("myTable").innerHTML = HTML;

}
