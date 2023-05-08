      var baseUrl = "https://www.googleapis.com/customsearch/v1?";
      var apiKey = "AIzaSyAHrpushe73DN11W-FBYX2-l0vnqJ0oCNw";
      var cx = "1773875922e494d45";
      var uID = localStorage.getItem("uID");
    
 
 


      async function getInputValueSpecific(){
            var searchInput = document.getElementById("search-input-specific").value;
            localStorage.setItem("SearchedString", searchInput);
            if (searchInput.length==0) {
                  return "";
            }
            var finalUrl = baseUrl + "key=" + apiKey + "&cx=" + cx +  "&q=" + searchInput;
            const res  = await fetch(finalUrl);
            const users = await res.json();
            return users;
      }

      let searchButtonSpec = document.querySelector("button[onClick='getInputValueSpecific()']");
      searchButtonSpec.addEventListener('click', async (event) => {
            event.preventDefault();
            let users = [];
            try {
                  users = await getInputValueSpecific();
            } catch (e) {
                  console.log("Error");
                  console.log(e);
            }
            
            
            if (users== ""){ 
                 // handle empty search
            }
            else{

                // encode the results as a query string
                localStorage.setItem("results", JSON.stringify(users));
                

                // create the URL with the encoded results
                let newUrl = `SR-Specific.html`;
                // navigate to the new URL
                window.location.href = newUrl;   
                      
            }

      });