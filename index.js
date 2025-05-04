document.getElementById('first').addEventListener('click',()=>{
    showMessage("✅ Success! Operation completed.","Success");
  });

  document.getElementById('second').addEventListener('click',()=>{
    showMessage("💡 Info: Please read this note.","Info");
  });

  document.getElementById('third').addEventListener('click',()=>{
    showMessage("⚠️ Warning: Check your input!","Warning");
  });

  document.getElementById('forth').addEventListener('click',()=>{
    showMessage("❌ Error: Something went wrong!","Error");
  });

  function showMessage(teja,type){

    const messageBox = document.getElementById("messageBox");
    
    const newMessage=document.createElement('div');
     newMessage.id=type;
     newMessage.className="megContainer";
    //  newMessage.textContent = teja;

     const text=document.createElement('p');
      text.textContent=teja;
    

      const closeBtn = document.createElement("p");
        closeBtn.className = "button";
        closeBtn.innerHTML = "&times;";             
        closeBtn.onclick = () => {
        newMessage.remove(); 
      };

      newMessage.appendChild(text);
      newMessage.appendChild(closeBtn);


     messageBox.appendChild(newMessage);

  }