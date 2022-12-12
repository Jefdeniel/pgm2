// try {
//   let x = 5 / NaN;
// } catch (e) {
//   console.log(e.message);
//   finally {
//     console.log("fiew, zijn we ook weer vanaf")
//   }
// }

// Als het niet werkt gaat hij de finally toch uitvoeren

function getMonthNameByNumber(monthNumber) {
  monthNumber = monthNumber - 1;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[monthNumber]) {
    return months[monthNumber];
  } else {
    throw new Error("INVALID_MONTH_NUMBER");
  }
}

let monthName,
  monthNumber = 13;
try {
  monthName = getMonthNameByNumber(monthNumber);
  console.log(monthName);
} catch (e) {
  monthName = "unknown";
  console.error(monthName);
  console.log(e.name, e.message);
}

// Je kan ook custom types errors schrijven
