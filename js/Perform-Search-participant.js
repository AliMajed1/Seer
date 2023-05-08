      var baseUrl = "https://www.googleapis.com/customsearch/v1?";
      var apiKey = "AIzaSyAHrpushe73DN11W-FBYX2-l0vnqJ0oCNw";
      var cx = "1773875922e494d45";

      const queryParams2 = new URLSearchParams(window.location.search);
      const uID2 = queryParams.get('uID');
      console.log(uID2);
      localStorage.setItem("uID", uID2);

    
      var excludeTerms = "";
      var exactTerms = "";
      const savedExCollection = db.collection(`EX-${uID2}`);
      const savedInCollection = db.collection(`IN-${uID2}`);



      savedExCollection.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
               
            excludeTerms = doc.data().Term; 
            console.log(excludeTerms);
        
            })
        })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });


      savedInCollection.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
               
            exactTerms = doc.data().Term; 
            console.log(exactTerms);
        
            })
        })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });


      async function getInputValue(){
            var searchInput = document.getElementById("search-input").value;
            if (searchInput.length==0) {
                  return "";
            }
            var finalUrl = baseUrl + "key=" + apiKey + "&cx=" + cx + "&exactTerms=" + exactTerms + "&excludeTerms=" + excludeTerms +  "&q=" + searchInput;
            const res  = await fetch(finalUrl);
            const users = await res.json();
            return users;
      }

      let searchButton = document.querySelector("button[onClick='getInputValue()']");
      searchButton.addEventListener('click', async (event) => {
            event.preventDefault();
            let users = [];
            try {
                  users = await getInputValue();
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
                let newUrl = `search-results-participant.html`;
                // navigate to the new URL
                window.location.href = newUrl;   
                      
            }

      });