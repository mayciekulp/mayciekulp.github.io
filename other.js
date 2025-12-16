function FormSubmit() {
        alert('Your form has been submitted!');
        return true;
    }


// snack calculator
    function getRecommendation() {
      let hungry = parseInt(document.getElementById("hungry").value);
      let thirsty = parseInt(document.getElementById("thirsty").value);
      let total = hungry + thirsty;
      let message;
      if (total >= 0 && total <= 6) {
        message = "Go to Baker!";
      } else if (total >= 7 && total <= 14) {
        message = "Get 2 hotdogs with ketchup and mustard and a white Redbull";
        } else if (total >= 15 && total <= 20) {
        message = "Get 2 schnack wraps and a large Dr. Pepper!";
      } else {
        message = "There is no helping you, go get TacoBell!";
      }
      document.getElementById("result").innerText = message;

      // Prevent form submission
      return false;
    }
