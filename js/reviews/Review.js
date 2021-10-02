import { collection, addDoc, db, getDocs } from "./firebase.js";

const review = document.querySelector(".form--review");
const reviewBtn = document.querySelector(".entry-box");
const reviewsContainer = document.querySelector(".review--box");

let reviews = [];
let clientsAddress = [];

//fetch user ip
const getUserIp = async () => {
  const res = await fetch(`https://api.ipify.org?format=json`);
  const data = await res.json();
  clientsAddress.push([data]);
};

//submits the review
formContainer.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (
    !(
      firstname.value != "" &&
      lastname.value != "" &&
      email.value != "" &&
      review.value != ""
    )
  )
    return alert("fill it >.<");

  getUserIp();

  console.log(clientsAddress);

  reviews.push({
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    review: review.value,
    curDate: new Date().getTime(),
  });
  await setReviews();
  await setUserIdentity();
  renderReviews();
  location.reload();
});

const renderReviews = () => {
  reviewsContainer.innerHTML = "";
  reviews.forEach((rev) => {
    console.log(rev.curDate);
    const date = new Date(rev.curDate);
    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: `numeric`,
      month: `long`,
      year: `numeric`,
      weekday: `long`,
    };
    const locate = navigator.language;

    const reviewUploadDate = new Intl.DateTimeFormat(locate, options).format(date);

    console.log(date);
    const markup = `
         <div class="review"> 
                         <div class="review-profile">
                   <img src="/img/x.jfif" alt="" class="review--profile__picture"> 
                    </div>    
              <div class="profile-info">
                <h1 class="profile-info--name"> ${rev.firstname} ${rev.lastname}</h1>
                     <span class="profile-info--date">${reviewUploadDate}</span>
                     <span class="profile-info--text">${rev.review}</span>
                    </div>                  
         </div>`;

    reviewsContainer.insertAdjacentHTML("beforeend", markup);
  });
};

const setReviews = async () => {
  try {
    const docRef = await addDoc(collection(db, "reviews"), { reviews });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getReviews = async () => {
  const querySnapshot = await getDocs(collection(db, "reviews"));
  querySnapshot.forEach((doc) => {
    reviews = doc.data().reviews;
  });
  renderReviews();
};
getReviews();

const setUserIdentity = async () => {
  try {
    const res = await fetch(`https://api.ipify.org?format=json`);
    const data = await res.json();

    const docRef = await addDoc(collection(db, "useridentity"), { data });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getUserIdentity = async () => {
  let status = false;
  try {
    const res = await fetch(`https://api.ipify.org?format=json`);
    const data = await res.json();

    const querySnapshot = await getDocs(collection(db, "useridentity"));
    querySnapshot.forEach((doc) => {
      if (doc.data().data.ip === data.ip) {
        status = true;
        clientsAddress = doc.data();
      }
    });
    console.log(status);
  } catch (err) {
  } finally {
    if (status) {
      reviewBtn.classList.add("hidden");
    } else {
      reviewBtn.classList.remove("hidden");
    }
    renderReviews();
  }
};
getUserIdentity();

// var {Filter} = require('bad-words'),
//    filter = new Filter();

// console.log(filter.clean("Don't be an ash0le")); //Don't be an ******
