function genPassword() {
    let words = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
    password = "";
    for (var i = 0; i < 15; i++) {
      let generator = words[Math.floor(Math.random() * 60)];
      password += generator;
    }
    
      let display = 
        document.getElementById("password").value = password;
    
    
  }
      function copyPassword() {
        var copyText = document.getElementById("password");
       copyText.select();
        document.execCommand("copy");
      }
  
      // generate random number//
  function genNumber(){
    let numbers = "1234567890";
    password1 = ""
    for (var i = 0; i < 6; i++){
      let numgenerator = 
        numbers[Math.floor(Math.random() * 10)];
      password1 += numgenerator;
    }
    let display = 
        document.getElementById("password").value = password1;
  }
      function genLowerCase() {
        let lower = "abcdefghijklmnopqrstuvwxyz";
        password2 = "";
        for (var i = 0; i < 9; i++){
          let lowgenerator = 
            lower[Math.floor(Math.random() * 24)];
          password2 += lowgenerator;
        }
  
        let display = 
        document.getElementById("password").value = password2;
      }
      function genUppercase() {
        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        password3 = "";
        for (var i = 0; i < 9; i++){
          let uppergenerator = 
            upper[Math.floor(Math.random() * 25)];
          password3 += uppergenerator;
        }
        let display = 
        document.getElementById("password").value = password3;
      }
  
      function getSymbol() {
        let symbol = "!@#$%^&*";
        password4 = "";
        for (var i = 0; i < 6; i++){
          let gensymbol = 
            symbol[Math.floor(Math.random() * 8)];
          password4 += gensymbol;
        }
        let display = 
        document.getElementById("password").value = password4;
      }
  
  
      
  
      function showMe() {
        
        var getNumber = document.getElementById("number");
        var getLowercase = 
          document.getElementById("lowercase");
        var getUppercase = 
          document.getElementById("uppercase");
        var getsymbol = 
          document.getElementById("symbols");
             var getpassword = 
          document.getElementById("ran-password");
  
  
        
        if(getNumber.checked){
          genNumber();
        }
    
        
        
        if(getLowercase.checked){
          genLowerCase();
        }
        if(getUppercase.checked){
          genUppercase();
        }
        if(getsymbol.checked){
          getSymbol();
        }
         if(getpassword.checked){
           genPassword();
        }
       
        
      }
      function defaultMe() {
        var default1 = "Reset";
         document.getElementById("password").value = default1;
      }