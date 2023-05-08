        // signup
    async function login(){
          

          
          
          
          
    }

    let loginButton = document.querySelector("button[onClick='login()']");
    loginButton.addEventListener('click', async (event) => {
          event.preventDefault();
          var email = document.getElementById("signup-email").value;
          var password = document.getElementById("signup-password").value;
          
          
          
          if (email== ""){ 
               // handle empty search
          }
          else if (password== ""){ 
         // handle empty search
          }
          else{

             console.log(email,password);
            auth.createUserWithEmailAndPassword(email, password)
              .then(cred => {
                console.log(cred.user);

              }) 

              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;

            });

         
                    
          }

    });