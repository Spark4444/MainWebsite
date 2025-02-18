// Save a key-value pair to local storage
export let saveToLocalStorage = (key, value) => localStorage.setItem(key, value);

// Retrieve a value from local storage by its key
export let getFromLocalStorage = key => localStorage.getItem(key);

// Function to get a value from local storage if it is present, otherwise save the default value to local storage and return the default value
export function getFromLocalStorageIfPresent(key, defaultValue){
    let item = getFromLocalStorage(key);
    if(item){
        return item;
    }
    else{
        saveToLocalStorage(key, defaultValue);
        return defaultValue;
    }
}

// Function to generate a random number between a start and end value
export function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Function to generate all the possible variationsof an array
export function permute(arr) {
    let variations = [];
  
    function permute(subArr, m = []) {
        if (subArr.length === 0) {
            variations.push(m);
        }
        else {
            subArr.forEach((element, index) => {
                let curr = subArr.slice();
                let next = curr.splice(index, 1);
                permute(curr.slice(), m.concat(next)); 
            });
        }
    }
  
    permute(arr);
    return variations;
}