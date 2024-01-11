// Replace with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6tSdZQ6d8-5hgeTpYEwvNbW2cqC5Z0aQ",
    authDomain: "mubarak-chicken.firebaseapp.com",
    projectId: "mubarak-chicken",
    storageBucket: "mubarak-chicken.appspot.com",
    messagingSenderId: "160226866721",
    appId: "1:160226866721:web:eb9ff0193554e21739d560"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firestore database
const db = firebase.firestore();

// Populate the dropdown with restaurant names
const restaurantDropdown = document.getElementById('restaurantDropdown');

db.collection('restaurants').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            const option = document.createElement('option');
            option.value = doc.data().pageURL;
            option.text = doc.data().name;
            option.lang = "en"; // Set language attribute to English (default)
            restaurantDropdown.add(option);
        });
    })
    .catch((error) => {
        console.error('Error getting restaurants: ', error);
    });

// Function to load the selected restaurant's page with calculated bill
function loadRestaurantPage() {
    const selectedPageURL = restaurantDropdown.value;
    if (selectedPageURL) {
        const totalBill = calculateTotalBill(); // Call a function to calculate the total bill
        window.location.href = `${selectedPageURL}?totalBill=${totalBill}`;
    }
}
