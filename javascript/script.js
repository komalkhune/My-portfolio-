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



const submit=()=>{


const name=document.getElementById("name");
const email=document.getElementById("email");
const message=document.getElementById("message");

if(name === "" || email === "" || message === ""){
 alert("Please fill all field")
}else{


     emailjs.init("hlDC36PxZOh0TiyLb");

    document
    .getElementById("contactForm")
    .addEventListener("submit", function(e){
    
        e.preventDefault();
    
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
    
    });

}

}
