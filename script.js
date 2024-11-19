const form = document.querySelector("#froyo-form");
const textarea = document.getElementById("flavors");
const resultsTableBody = document.querySelector("#order-summary tbody");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(textarea.value);

  // Clear the table body for new results using empty string
  resultsTableBody.innerHTML = "";

  // Get the value of the textarea (and trim any whitespace
  const flavorString = textarea.value.trim();

  // Split the string into an array of flavors
  const flavorArray = flavorString.split(",");

  // Initialize an empty orders object
  const orders = {};

  for (let i = 0; i < flavorArray.length; i++) {
    const flavor = flavorArray[i].trim(); // Trim any extra spaces

    if (flavor) {
      // Check if flavor is not an empty string
      if (orders[flavor]) {
        // If the flavor already exists in the object, increment its count
        orders[flavor]++;
      } else {
        // If the flavor doesn't exist, initialize it with a count of 1
        orders[flavor] = 1;
      }
    }
  }
  // Log the orders to the console to verify it's working
  for (const [flavor, count] of Object.entries(orders)) {
    console.log(`${flavor}: ${count}`);
  }

  //Log the orders to the table body
  for (const [flavor, count] of Object.entries(orders)) {
    const row = document.createElement("tr");

    const flavorCell = document.createElement("td");
    flavorCell.textContent = flavor;

    const countCell = document.createElement("td");
    countCell.textContent = count;

    row.appendChild(flavorCell);
    row.appendChild(countCell);

    resultsTableBody.appendChild(row);
  }
});
