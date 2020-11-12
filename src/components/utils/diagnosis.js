export const bloodPressure = (systolic, diastolic) => {
    const calculation = Number(diastolic) / Number(systolic);
    const bloodPressure = Math.round(calculation);

    console.log("Blood pressure", bloodPressure);
    return bloodPressure;
};

//**************************************************
//Body mass index analysis
//**************************************************
export const bodyMassIndex = (height, weigth) => {
    const heightCalculation = Number(height / 100) ** 2;
    const calculation = Number(weigth) / heightCalculation;
    const bodyMassIndex = Math.round(calculation);

    console.log("Body mass", bodyMassIndex);

    switch (true) {
        case bodyMassIndex >= 35.0:
            return 3;

        case bodyMassIndex === 30.0 && bodyMassIndex <= 34.99:
            return 2;

        case bodyMassIndex === 25.0 && bodyMassIndex <= 29.99:
            return 1;

        case bodyMassIndex === 18.5 && bodyMassIndex <= 24.99:
            return 0;

        case bodyMassIndex <= 18.5:
            return -1;

        default:
            return -1;
    }
};

//**************************************************
//Cigarettes Smoked PervWeek analysis
//**************************************************
export const cigarettesSmokedPerWeek = (cigarettesPiecesSmoked) => {
    const cigSmokedPerWeek = Number(cigarettesPiecesSmoked);

    console.log("Cigarretes smoked", cigSmokedPerWeek);
    switch (true) {
        case cigSmokedPerWeek >= 24:
            return 4;

        case cigSmokedPerWeek === 13 && cigSmokedPerWeek <= 24:
            return 3;

        case cigSmokedPerWeek === 7 && cigSmokedPerWeek <= 12:
            return 2;

        case cigSmokedPerWeek === 1 && cigSmokedPerWeek <= 6:
            return 1;

        case cigSmokedPerWeek === 0:
            return 0;

        default:
            return 0;
    }
};

//**************************************************
//Physical activities analysis
//**************************************************
export const physicalActivity = (hours, minutes) => {
    const hoursPerWeek = hours * 3600 + minutes * 60; //converted to seconds
    console.log("Hours Per Week", hoursPerWeek);

    if (hoursPerWeek === 0 && hoursPerWeek <= 3600) console.log("Heyy");

    switch (true) {
        //1hrs = 3600secs
        case hoursPerWeek === 0 && hoursPerWeek <= 3600:
            console.log("H/W", 4);
            return 4;

        //1hrs = 3600secs & 3.999hrs = 14396.4secs
        case hoursPerWeek === 3600 && hoursPerWeek <= 14396.4:
            console.log("H/W", 3);
            return 3;

        //1.4hrs = 5040secs & 2.4hr =8640
        case hoursPerWeek === 5040 && hoursPerWeek <= 8640:
            console.log("H/W", 2);
            return 2;

        //2.5hrs = 9000 & 3.4hrs = 12240
        case hoursPerWeek === 9000 && hoursPerWeek <= 12240:
            console.log("H/W", 1);
            return 1;

        //3.5hrs = 12600secs
        case hoursPerWeek >= 12600:
            console.log("H/W", 0);
            return 0;

        default:
            return 4;
    }
};