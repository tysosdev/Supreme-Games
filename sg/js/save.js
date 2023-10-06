async function getMainSave() {
  var mainSave = {};
  // List of items in localStorage that should not be saved
  var localStorageDontSave = ['discord'];

  // Convert localStorage to an array of key-value pairs and remove the items that should not be saved
  var localStorageSave = Object.entries(localStorage);

  for (let entry in localStorageSave) {
    if (localStorageDontSave.includes(localStorageSave[entry][0])) {
      localStorageSave.splice(entry, 1);
    }
  }

  // Convert the localStorage array to a base64-encoded JSON string
  localStorageSave = JSON.stringify(localStorageSave);
  //indexedDB stuff
  var indexedDBsave = new Array();
  await indexedDB.databases().then(dbs => {
    dbs.forEach(db => {
      // Save the database name and version
      var data = getDbdata(db.name, db.version);
      indexedDBsave.push({name: db.name, ver: db.version, data: data});
    });

  });

  // Convert the indexedDB array to a base64-encoded JSON string
  indexedDBsave = JSON.stringify(indexedDBsave);

  // Add the localStorage data to the mainSave object
  mainSave.localStorage = localStorageSave;

  // Add the indexedDB data to the mainSave object
  mainSave.indexedDB = indexedDBsave;
  
  // Get the cookies data and add it to the mainSave object
  cookiesSave = document.cookie;
  cookiesSave = cookiesSave;
  mainSave.cookies = cookiesSave;

  // Convert the mainSave object to a base64-encoded JSON string
  mainSave = btoa(JSON.stringify(mainSave));

  // Return the encrypted mainSave data
  return mainSave;
}

// Function to download the main save data as a file
async function downloadMainSave() {
  var data = new Blob([await getMainSave()]);
  var dataURL = URL.createObjectURL(data);

  var fakeElement = document.createElement('a');
  fakeElement.href = dataURL;
  fakeElement.download = 'games.save';
  fakeElement.click();
  URL.revokeObjectURL(dataURL);
}

function setDbdata(dbName, dbVersion, dbdata) {
  const request = indexedDB.open(dbName, dbVersion);

  request.onupgradeneeded = event => {
    const database = event.target.result;

    // Iterate over the data containing object store names and data
    dbdata.forEach(({ objectStoreName, data }) => {
      database.createObjectStore(objectStoreName);
      const transaction = database.transaction([objectStoreName], "readwrite");
      const objectStore = transaction.objectStore(objectStoreName);
      // Assuming 'data' is an array of objects you want to store
      data.forEach(item => {
console.log(item);
console.log(item.contents);
if(item.contents != undefined){
        objectStore.add(item.contents); // Add each item to the object store
}
      });
    });
}
} 


function getDbdata(dbName, dbVersion) {
  const request = indexedDB.open(dbName, dbVersion);

      // Create an array to store all the data from all object stores
      const allData = [];
  request.onsuccess = event => {
    const database = event.target.result;

    // Get a list of all object store names in the database
    const objectStoreNames = database.objectStoreNames;

    // Convert the object store names to an array
    const objectStoreNamesArray = Array.from(objectStoreNames);

    // Function to retrieve data from a specific object store
    function getDataFromObjectStore(objectStoreName) {
      const transaction = database.transaction([objectStoreName], "readonly");
      const objectStore = transaction.objectStore(objectStoreName);
      const getAllDataRequest = objectStore.getAll();

      getAllDataRequest.onsuccess = event => {
        const data = event.target.result;3
        allData.push({objectstore:objectStoreName, data:data });

        // Check if we have retrieved data from all object stores
        if (allData.length === objectStoreNamesArray.length) {
          // 'allData' now contains data from all object stores
          return true;
        }else{
          return false;
        }
      };

      transaction.onerror = event => {
        console.error("Transaction error for object store", objectStoreName, ":", event.target.error);
      };
    }
    
    // Iterate through object store names and retrieve data from each
    objectStoreNamesArray.forEach(objectStoreName => {
      if(getDataFromObjectStore(objectStoreName) == true){
        console.log(alldata);
        return allData
      }
    });
  };
  return allData
}

// Function to get the main save data from an uploaded file
function getMainSaveFromUpload(data) {
  try {
    // Decrypt the uploaded data using AES decryption with the key 'save'
    // Parse the decrypted data as JSON
    var mainSave = JSON.parse(atob(data));
    var mainLocalStorageSave = JSON.parse(mainSave.localStorage);
    var indexedDBsave = JSON.parse(mainSave.indexedDB);
    var cookiesSave = mainSave.cookies;

    // Set the items in localStorage using the uploaded data
    for (let item of mainLocalStorageSave) {
      localStorage.setItem(item[0], item[1]);
    }

    for (let item of indexedDBsave) {
      localStorage.setItem(item[0], item[1]);
    }

    indexedDBsave.forEach(db => {
      // Save the database name and version
      setDbdata(db.name, db.version, db.data);
    });

    // Set the cookies using the uploaded data
    document.cookie = cookiesSave;
    return true
  } catch (err) {
    return false
  }
}

// Function to handle the file upload
function uploadMainSave() {
  var hiddenUpload = document.getElementById("uploader");

  // Listen for the change event on the file input element
  hiddenUpload.addEventListener('change', function (e) {
    console.log("upload");
    var files = e.target.files;
    var file = files[0];
    if (!file) {
      alert("No file!");
      return;
    }

    // Read the contents of the uploaded file as text and call getMainSaveFromUpload with the result
    var reader = new FileReader();

    reader.onload = function (e) {
      if (getMainSaveFromUpload(e.target.result)) {
        alert("save saved!");

      } else {
        alert("failed, make sure you used the correct file");
      }
    };

    reader.readAsText(file);
  });
}
uploadMainSave();