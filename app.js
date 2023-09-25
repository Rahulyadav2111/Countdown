const endDate = "01 july 2025 6:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs  = document.querySelectorAll("input")


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;

if(diff < 0) return;

    //convert into days
    inputs[0].value = Math.floor(diff/3600/24); //math.floor use for integer value
    
    //convert into hours
    inputs[1].value = Math.floor((diff/3600) % 24);

    //convert into minutes
    inputs[2].value = Math.floor((diff/60) % 60);

    //convert into minutes
    inputs[3].value = Math.floor((diff) % 60);

}   
//initial call
clock()

setInterval(
  () =>{
    clock()
    },
    1000
)