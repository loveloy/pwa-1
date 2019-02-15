function loadjson(file,callback) {
 var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("applcation/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status == "200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
 loadjson("data.json",function(text)
{
 var data = JSON.parse(text);
 console.log(data);
 details(data.basic);
 careerinfo(data.career);
 educationdetails(data.education);
 Technicalskills(data.Technicalskills);
})
var left =document.querySelector(".leftchild");
function details(det) {
  var image= document.createElement("img");
  image.src=det.image;
  left.appendChild(image);

 var name= document.createElement("h3");
 name.textContent=det.name;
 left.appendChild(name);

  var mail= document.createElement("a");
  mail.href="mailto:sanjukummari7@gmail.com";
  mail.textContent=det.email;
  left.appendChild(mail);

  var number= document.createElement("p");
  number.textContent=det.number;
  left.appendChild(number);
  var address= document.createElement("h1");
  address.textContent="Address";
  left.appendChild(address)

  var hr= document.createElement("hr");
  left.appendChild(hr);

  var address1= document.createElement("p");
  address1.textContent=det.address;
  left.appendChild(address1)

}

var right= document.querySelector(".rightchild");
function careerinfo(career){

var add= document.createElement("h3");
add.textContent="Career Objective";
right.appendChild(add);

var hr=document.createElement("hr");
right.appendChild(hr);

var add1= document.createElement("p");
add1.textContent=career.info;
right.appendChild(add1);
}

function educationdetails(edu){
  var add2= document.createElement("h3");
  add2.textContent="education qualifications";
  right.appendChild(add2);

  var hr= document.createElement("hr");
  right.appendChild(hr);

  var table= document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>degree</th><th>passout</th></tr>";
  var tr2="";

  for(var i=0;i<edu.length;i++){
  tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>";

}
table.innerHTML=tr1+tr2;
right.appendChild(table);
}
function Technicalskills(sk){
  var s1= document.createElement("h3");
  s1.textContent="Technicalskills";
  right.appendChild(s1);

  var hr= document.createElement("hr");
  right.appendChild(hr);

  var ul=document.createElement("ul");
  for(var i=0;i<sk.length;i++){
    var li = document.createElement("li");
    li.textContent=sk[i].title+":"+sk[i].content;
    ul.appendChild(li);

  }
  right.appendChild(ul);
}
