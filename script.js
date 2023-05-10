function Dog(name, breed, age, canTalk) {
      this.name = name;
      this.breed = breed;
      this.age = age;
      this.canTalk = canTalk;

      this.myGreeting = function() {
        if (this.canTalk) {
          return "Hi, I'm " + this.name + "! I can talk!";
        } else {
          return "Hi, I'm " + this.name + ". I cannot talk.";
        }
      };
    }

    var dog1 = new Dog("Ace Hart Private Eye Dog", "German Shepherd", 3, true);
    var dog2 = new Dog("Brian Griffin", "Labrador Retriever", 7, true);

    var selectedDog = prompt("Select a dog by typing its name (Ace Hart Private Eye Dog or Brian Griffin):");

    var selectedDogObject;
    if (selectedDog === dog1.name) {
      selectedDogObject = dog1;
    } else if (selectedDog === dog2.name) {
      selectedDogObject = dog2;
    }

    if (selectedDogObject) {
      var dogInfo = "";
      for (var prop in selectedDogObject) {
        dogInfo += prop + ": " + selectedDogObject[prop] + "<br>";
      }
      document.getElementById("dogInfo").innerHTML = dogInfo;
    } else {
      document.getElementById("dogInfo").innerHTML = "Error: The selected dog does not exist.";
    }