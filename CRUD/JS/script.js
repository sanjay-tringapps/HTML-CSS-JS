
let data=[];
let t=0;
print();



function myFunction()
{
document.getElementById("firstspan").innerHTML="";
document.getElementById("lastspan").innerHTML="";
document.getElementById("genderspan").innerHTML="";
document.getElementById("phonespan").innerHTML="";
document.getElementById("emailspan").innerHTML="";
document.getElementById("developerspan").innerHTML="";
var count=1;
var regName = /^[a-zA-Z]+$/;
var firstname = document.getElementById("firstname").value;
if (!regName.test(firstname)) 
{
   count=0;
   document.getElementById("firstspan").innerHTML="  invalid firstname";
} 
var lastname = document.getElementById("lastname").value;
if (!regName.test(lastname))
{
    count=0;
    document.getElementById("lastspan").innerHTML="  invalid lastname";
} 
var course=document.getElementById("course").value;
var gender;
if(document.getElementById('male').checked == false && document.getElementById('female').checked == false) 
{   
		 document.getElementById("genderspan").innerHTML="gender is not selected";
         count=0;
} 
else if(document.getElementById('male').checked == true)
{
    gender="MALE";
}
else
{
    gender="FEMALE";
}
var phonenumber=document.getElementById("phonenumber").value;
var phonelength=phonenumber.toString().length;
if(phonelength!=10)
{
    count=0;
    document.getElementById("phonespan").innerHTML="phone number must be in 10 digits";
}
var email=document.getElementById("email").value;
if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
{
  
  document.getElementById("emailspan").innerHTML="  enter valid email address";
  count=0;
}
var frontend=document.getElementById("frontend");
var backend=document.getElementById("backend");
var fullstack="no";
if (frontend.checked && backend.checked)
{
   frontend.value="yes";
   backend.value="yes";
   fullstack="yes";
}
if (!frontend.checked && !backend.checked)
{
    frontend.value="no";
    backend.value="no";
    count=0;
    document.getElementById("developerspan").innerHTML="  please select the developer role";
}
if(frontend.checked && !backend.checked)
{
    frontend.value="yes";
    backend.value="no";
}
if(!frontend.checked && backend.checked)
{
    frontend.value="no";
    backend.value="yes";
}
var address=document.getElementById("address").value;
if(count==1)
{
    let temp=
        {
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
    document.getElementById("myForm").reset();
}
  print();
  if(count==1)
  return true;
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

    if(myFunction()==true)
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
    for(let i=0;i<data.length;i++)
    {
      HTML+="<tr>";
      HTML += "<td>"+data[i].name+"</td>"+"<td>"+data[i].course+"</td>"+"<td>"+data[i].gender+"</td>"+"<td>"+data[i].phone+"</td>"+"<td>"+data[i].address+"</td>"+"<td>"+data[i].email+"</td>"+"<td>"+data[i].fullstack+"</td>";
      HTML+="<td><button type="+"button"+" onClick="+"edit(this)"+">EDIT</td>";
      HTML+="<td><button type="+"button"+" onClick="+"remove(this)"+">DELETE</td>";
      HTML+="</tr>";
    }
    HTML += "</table>";
    document.getElementById("myTable").innerHTML = HTML;

}
