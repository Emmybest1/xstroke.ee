import { db } from "../config/firebase.js";
import { testHistoryCollection } from "../data/collections.js";

const testHistoryContainer = document.querySelector(".test-history-container");
const isLoading = document.querySelector("#isLoading");

const renderHistory = (snapshot) => {
    snapshot.map((change) => {
        const data = change.doc.data();
        const historyTemplate = `
                    <div>
                          <time class="history--date">${data.date}</time>
                          <img src="./src/assets/images/user.png" alt="" class="user--profile" />
                          <h4 class="history--heading stroke--level--heading">Stoke level</h4>
                          <p class="stoke--level">
                              <span class="stoke--level--is level-${data.strokeLevel}">${data.strokeLevel}</span>
                              <span class="out--of"> out of</span> <span class="out--of--5"> 4 </span>
                          </p>
                          <h4 class="history--heading suggestion--heading">We Suggested that</h4>
                          <ul>
                             <li>Your physical activities: ${data.physicalActivitiesMsg}</li>
                             <li>Your blood pressure: ${data.bloodPressureMsg}</li>
                             <li>Your cigarrete status: ${data.cigarreteMsg}</li>
                             <li>Your mass index: ${data.massIndexMsg}</li>
                             <li class="created-on">Created on: ${data.date}</li>
                          </ul>
                    </div>
`;

        isLoading.style.display = "none";
        testHistoryContainer.innerHTML += historyTemplate;
    });
};

const getData = () => {
    db.collection(testHistoryCollection).onSnapshot((snapshot) => {
        const snap = snapshot.docChanges();
        renderHistory(snap);
        //update isLoading bar
        if (!snap.length) isLoading.textContent = "No test done yet";
    });
};
getData();
