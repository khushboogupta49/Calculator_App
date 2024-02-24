let Result = document.getElementById("result");

      function insertValue(value) {
        Result.value += value;
        //    Result. value = value+value;
      }

      function deleteResult() {
        Result.value = Result.value.slice(0, -1);
      }
      function Reset() {
        Result.value = "0";
      }

      function calculate() {
        try {
          Result.value = eval(Result.value);
        } catch (Invalid) {
          Result.value = "Invalid";
        }
      }