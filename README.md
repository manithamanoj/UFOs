# UFOs
## Introduction

In this challenge we are going to work on Dana’s webpage and a dynamic table to get more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, we are going to add table filters for the city, state, country, and shape.


## Analysis

We modify the code in index.html file to create more table filters. We add filters for the city, state, country, and shape. Next, we refactor the code in app.js file. We replace the handleClick() function in the app.js file with a new function that saves the element, value, and id of the filter that was changed. We then create a new function to loop through the dataset and keep only the results that match the search criteria. The webpage will be updated with the search criteria after pressing “Enter”.

Results
* This is the screen shot of the webpage.

<img width="1431" alt="Screen Shot 2022-03-12 at 9 23 34 PM" src="https://user-images.githubusercontent.com/72629108/158045771-b6ab52fe-c87e-4655-83c9-bf349fc6167a.png">




* This is the picture with all the filters we added.

<img width="1431" alt="Screen Shot 2022-03-12 at 9 23 48 PM" src="https://user-images.githubusercontent.com/72629108/158045779-a97c0761-ce0e-43ea-8ed9-efeec0943390.png">



* Including few pictures with the one search criteria and multiple search criteria. Everything is working perfectly.

<img width="1431" alt="Screen Shot 2022-03-12 at 9 24 28 PM" src="https://user-images.githubusercontent.com/72629108/158045795-706c7eae-966b-4cf7-b4b8-a71fe4ecf18a.png">


<img width="1431" alt="Screen Shot 2022-03-12 at 9 24 47 PM" src="https://user-images.githubusercontent.com/72629108/158045804-b4dd863d-b2a0-43f8-b20d-095a96c92355.png">


<img width="1431" alt="Screen Shot 2022-03-12 at 9 25 20 PM" src="https://user-images.githubusercontent.com/72629108/158045819-4456afcc-f92c-48af-a7af-3ebba1e0ce6f.png">



<img width="1431" alt="Screen Shot 2022-03-12 at 9 25 50 PM" src="https://user-images.githubusercontent.com/72629108/158045830-17174746-1522-4a54-9664-769f031b7976.png">




## Summary
* Drawbacks

One drawback is the search field is Case sensitive.

There is no data for Roswell city in the given data. So, having this in the city name as a sample value is misleading.

* Suggestions

Adding a vertical scroll bar in the data table will help in easy navigation and also will get a better look to the page.

Adding “Search” and “Clear Filter” buttons will make it more user intuitive to search and to clear the search filters.

Moving the description under the heading will more effectively use the space in the page and it will give a better look to the page.
  
