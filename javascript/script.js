console.log("JS Loaded");
console.log(document.getElementById("contactForm"));

function toggleMenu(){
    document.querySelector(".mview")
    .classList.toggle("show");
}
   
   
var typed = new Typed("#typing", {
  strings: ["React Developer", "Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});


AOS.init();



document.getElementById("contactForm").addEventListener("submit", submit);

function submit(event) {
    event.preventDefault();


const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const message=document.getElementById("message").value.trim();

console.log("name",name);
console.log("email",email);
console.log(email);

if(name === "" || email === "" || message === ""){
 alert("Please fill all field")
}else{


     emailjs.init("hlDC36PxZOh0TiyLb");
    
        emailjs.send("service_w9q7lre", "template_wbj35os", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        })
    
        .then((success)=>{
            alert("Message Sent Successfully!");
    
            document.getElementById("contactForm").reset();
        }).catch((error)=>{
              console.log(error);
            alert("Failed to send message");
        })
    

}

}



