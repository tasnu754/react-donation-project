**Three features of my project**

* In my project I have 3 sections. Home, Donation and Statistic section.
  There are all category cards in home section by default. If you click any card then it will take you another page where you can see the details of clicked card. And there is a doonation button, when button clicked, the card will add into donation section.

* I have store the data in local storage. When a button will clicked, the data of that button will be stored
  in the local storage using localStorage.setItem() function. And then I get the data by using localStorage.getItem() function and show the cards in donation section.

* In Statistic section I have added a pie chart which is showing your donation against the total donation in 
  persantage. And the search button in the home section is functional. When you search a particular type of category, you will see only the cards of that category. And also there is a see all button in donation section. When cards length is greater than 4, the button will appear and once click the button the button will hidden and all cards will be shown.