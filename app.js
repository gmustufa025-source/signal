function checkSignal() {
  let input = document.getElementById("colorInput").value.toLowerCase();
  let msg = document.getElementById("message");

  // reset lights
  document.getElementById("red").className = "light";
  document.getElementById("yellow").className = "light";
  document.getElementById("green").className = "light";

  if (input === "red") {
    document.getElementById("red").classList.add("red-on");
    msg.innerHTML = "🛑 Stop!";
    msg.style.color = "red";
  } 
  else if (input === "yellow") {
    document.getElementById("yellow").classList.add("yellow-on");
    msg.innerHTML = "⚠ Ready!";
    msg.style.color = "orange";
  } 
  else if (input === "green") {
    document.getElementById("green").classList.add("green-on");
    msg.innerHTML = "✅ Go!";
    msg.style.color = "green";
  } 
  else {
    msg.innerHTML = "❌ Invalid color!";
    msg.style.color = "black";
  }
}