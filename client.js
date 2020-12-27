/* "StAuth10065: I Prerak Patel, 000825410 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else." */
const axios = require("axios");

async function test() {
  try {
    /*------------------------------ Test 1 ------------------------------------*/

    /* 1. Execute three POST requests to insert three items into the collection.*/

    // First POST request
    const response1 = await axios.post("http://localhost:3000/api", {
      status: "Critical",
      message: "Explosion imminent",
      timestamp: "2020-08-19T23:30:17.9",
    });
    console.log(response1.data);

    // Second POST request
    const response2 = await axios.post("http://localhost:3000/api", {
      status: "Warning",
      message: "Overheating machine",
      timestamp: "2020-09-03T15:36:56.4",
    });
    console.log(response2.data);

    // Third POST request
    const response3 = await axios.post("http://localhost:3000/api", {
      status: "Error",
      message: "Coolant leak",
      timestamp: "2020-09-04T03:45:23.4",
    });
    console.log(response3.data);

    /* 2. Execute a single item PUT request to modify a single item in the collection.*/

    // PUT item request
    const response4 = await axios.put("http://localhost:3000/api/2", {
      status: "Failed",
      message: "Leakage in Coolant",
      timestamp: "2020-09-14T03:45:23.4",
    });
    console.log(response4.data);

    /* 3. Execute three separate item GET requests to check if each item is correct.*/

    // GET item request for id = 1
    const response5 = await axios.get("http://localhost:3000/api/1");
    console.log(response5.data);

    // GET item request for id = 2
    const response6 = await axios.get("http://localhost:3000/api/2");
    console.log(response6.data);

    // GET item request for id = 3
    const response7 = await axios.get("http://localhost:3000/api/3");
    console.log(response7.data);

    /*------------------------------ Test 2 ------------------------------------*/

    /* 1. Execute a single collection PUT request that replaces the collection with 4 new items. */

    // PUT item request
    const response8 = await axios.put("http://localhost:3000/api", [
      {
        status: "Hibernate",
        message: "Due to Overuse",
        timestamp: "2020-09-03T15:36:56.4",
      },
      {
        status: "Reset",
        message: "More Memory",
        timestamp: "2020-09-02T03:45:23.4",
      },
      {
        status: "Restart",
        message: "After Update",
        timestamp: "2020-09-09T05:13:01.6",
      },
      {
        status: "Start",
        message: "After new install",
        timestamp: "2020-09-01T15:35:43.9",
      },
    ]);
    console.log(response8.data);

    /* 2. Execute a single collection GET request to check if all the items are correct. */

    // GET collection request
    const response9 = await axios.get("http://localhost:3000/api");
    console.log(response9.data);

    /* 3. Execute a single item DELETE request to delete a single item from the collection. */

    // DELETE item request for id = 3
    const response10 = await axios.delete("http://localhost:3000/api/3");
    console.log(response10.data);

    /* 4. Execute a single collection GET request to check if all the items are correct. */

    // GET collection request
    const response11 = await axios.get("http://localhost:3000/api");
    console.log(response11.data);

    /*------------------------------ Test 3 ------------------------------------*/

    /* 1. Execute a single collection DELETE request to delete the entire collection. */

    // DELETE collection request
    const response12 = await axios.delete("http://localhost:3000/api");
    console.log(response12.data);

    /* 2. Execute a single collection GET request to check if the collection is empty. */

    // GET collection request
    const response13 = await axios.get("http://localhost:3000/api");
    console.log(response13.data);

    /* 3. Execute a single collection PUT request to replace the collection with 3 new items. */

    // PUT collection request
    const response14 = await axios.put("http://localhost:3000/api", [
      {
        status: "Update",
        message: "Software version changed",
        timestamp: "2020-08-23T05:16:23.4",
      },
      {
        status: "Upgrade",
        message: "Model expired",
        timestamp: "2020-08-12T19:24:59.4",
      },
      {
        status: "Install",
        message: "Software Dowmloaded",
        timestamp: "2020-08-19T20:30:26.6",
      },
    ]);
    console.log(response14.data);

    /* 4. Execute two POST requests to insert two items into the collection. */

    // First POST request
    const response15 = await axios.post("http://localhost:3000/api", {
      status: "Firewall",
      message: "Needed to secure",
      timestamp: "2020-09-13T22:32:16.7",
    });
    console.log(response15.data);

    // Second POST request
    const response16 = await axios.post("http://localhost:3000/api", {
      status: "Encryption",
      message: "Password Encrypted",
      timestamp: "2020-09-11T16:20:37.5",
    });
    console.log(response16.data);

    /* 5. Execute a single item PUT request to modify a single item in the collection. */

    // PUT item request
    const response17 = await axios.put("http://localhost:3000/api/4", {
      status: "Gateway",
      message: "Networking hardware",
      timestamp: "2020-09-09T13:21:18.2",
    });
    console.log(response17.data);

    /* 6. Execute a single item DELETE request to delete a single item from the collection. */

    // DELETE item request for id = 1
    const response18 = await axios.delete("http://localhost:3000/api/1");
    console.log(response18.data);

    /* 7. Execute a single collection GET request to check if all the items are correct. */

    // GET collection request
    const response19 = await axios.get("http://localhost:3000/api");
    console.log(response19.data);

    // Runs if all the tests have passed
    console.log("ALL TESTS SUCCESSFUL");
  } catch (error) {
    console.error(error);
  }
}

// call our test function
test();
