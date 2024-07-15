// grab the form
const form = document.querySelector(`form`);

//when the form is submitted we need an event listener
form.addEventListener (`submit`,  async (event) => {
    event.preventDefault();

    //grab the input
 const input = document.querySelector(`input`);

 //get the value from the input
 const newPartyName = input.value;

 //call the api with value "2406-FTB-ET-WEB-FT/events"
 const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/events${newPartyName}`);
 const newPartyData = await response.json();
 console.log(newPartyData);

 //create a new list item
 const partyLI = document.createElement(`li`);

 //put party info in the list item
partyLI.innterhtml = `
 <h4>${newPartyData.name}</h4
 
`
//grab the ul
const ul = document.querySelector(`ul`);
console.log(ul);

})










//attach the list to the ol