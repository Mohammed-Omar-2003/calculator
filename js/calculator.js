let display = document.getElementById("display");

function appendToDisplay(ele) {
  display.value = display.value + ele;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  let result;
  // try دورها انها بتنفذ العمليه ال جوها ولكن لو حصل error
  //ولكن  لو حصل error فى العمليه ال جوها تقوم
  //catch هى ال تتنفذ
  try {
    //evel دى بتمسك المحتوى ال جوها وتحوله لعميه على حسب هى اى وتطلع النتيجه
    result = eval(display.value);
    // فى حلت حصل error ولا حاجه
  } catch (error) {
    result = "Error";
  }
  display.value = result;
}
//شرح ليها بمثل كمان
// try {
//   // كود يحتمل حدوث الأخطاء
//   let result = 10 / 0; // قسمة على صفر - سيتم إثارة خطأ هنا
//   console.log(result); // لن يتم تنفيذه بسبب الخطأ
// } catch (error) {
//   // كود للتعامل مع الأخطاء
//   console.log("An error occurred:", error.message); // سيتم تنفيذه وسيتم طباعة رسالة الخطأ
// }
