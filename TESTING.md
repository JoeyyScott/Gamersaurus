## Testing

### Code Validators

I used [w3.org's validator](https://validator.w3.org) for my HTML validation checks.

+ All pages:

    ![HTML5 Validation](static/images/testing/html-test.png)

I used [w3.org's validator](https://jigsaw.w3.org/css-validator/) for my CSS validation checks.

+ CSS (style.css)

    ![CSS Validation](static/images/testing/css-test.png)

+ No errors were found within the document.

I used [JSHint](https://jshint.com) to check the javascript file in my project to make certain it complies with coding standards and that were no syntax errors detected.

+ Javascript file (script.js) - When testing my code with JSHint I was getting numerous errors about const, let and using template literal syntax. I researched it and found [this post](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const) which taught me I needed to tell JSHint what es version I was using with the following code ```/*jshint esversion: 6 */``` which fixed those errors.
    + The only other error I was receiving was from ```$``` as it was flagged as an undefined variable. Upon researching I found [this post](https://stackoverflow.com/questions/8852765/jshint-and-jquery-is-not-defined) which taught me I needed to tell JSHint that I was using jQuery with the following code ```/*globals $:false */``` which fixed those errors.
    + After putting those two lines of code at the top of my JSHint tests, I only received an error about emailjs being an undefined variable.

        ![JS Validation](static/images/testing/js-test.png)

    + I consulted with a few members of the [Code Institute](https://codeinstitute.net/) Slack community about this and I have found out it is not an error, it is that jsHint does not recognize it as it is defined in the base.html file. As such my code passed with no errors.


I used [PEP8 online](http://pep8online.com/) to test my Python code against PEP8 standards.

![PEP8 Validation](static/images/testing/pep8-test.png)

+ No errors were found within the document.

### Responsiveness

Responsiveness (website layout)

|           All Pages           | Samsung 9+ | Galaxy S5  | iPhone 6/7/8 | iPhone X | iPad | iPad Pro | Desktop 1024px | Desktop >1200px |
|:-----------------------------:|------------|------------|--------------|----------|------|----------|----------------|-----------------|
| Website is  responsive >800px |     N/A    |    N/A     |      N/A     |    N/A   | Good |   Good   |      Good      |       Good      |
| Website is  responsive <799px |    Good    |    Good    |     Good     |   Good   |  N/A |    N/A   |       N/A      |       N/A       |
|                               |            |            |              |          |      |          |                |                 |
| **index.html**                |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **gamersaurus.html**          |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **login.html**                |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **register.html**             |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **profile.html**              |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **add_term.html**             |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **edit_term.html**            |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **contact.html**              |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **404.html**                  |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |

Notes:

+ Through the use of Materialize and my own design input the site is responsive on all screen sizes that I have tested personally. There may be slight issues on certain abstract displays that might need additional media queries as I experienced minor issues in the development of the project pertaining to content being too big for the viewport in very extreme cases.

### Browser Compatibility

I tested the appearance and responsiveness of the website across 6 different browsers and varying browser sizes and these are my results:

|    All Pages   | Firefox | Chrome |  IE  | Edge | Opera | Safari |
|:--------------:|:-------:|:------:|:----:|:----:|:-----:|:------:|
| Appearance     |   Good  |  Good  | Good | Good |  Good |  Good  |
| Responsiveness |   Good  |  Good  | Good | Good |  Good |  Good  |

### Testing User stories

+ #### User goals

    + As a **user**, I want to be able to view all the terms currently added.
    + As a **user**, I want to understand the main purpose of the site.
    + As a **user**, I want to be able to intuitively navigate through the site.
    + As a **user**, I want to be able to make my own account and submit terms to the site.
    + As a **user**, I want to be able to contact the site owner with any queries I have regarding the site.

+ #### Registered User Goals

    + As a **registered user**, I want to be able to log in and out of my account.
    + As a **registered user**, I want to be able to submit terms of my own to the site.
    + As a **registered user**, I want to be able to edit any terms I have submitted to the site.
    + As a **registered user**, I want to be able to delete any terms I have submitted to the site.

+ #### Site Owner Goals

	+ As a **site owner**, I want to provide the user with the essential information required to understand the site's purpose.
	+ As a **site owner**, I want the user to be able to navigate to other areas of the site.
	+ As a **site owner**, I want the user to be able to view the thesaurus without having an account.
	+ As a **site owner**, I want the user to be able to seemlessly make an account and submit terms to the site.
	+ As a **site owner**, I want the user to be able to edit and delete terms they have added.
	+ As a **site owner**, I want to include links to the associated socials for the product.

### Additional Testing

**General Testing**:
+ All navigation buttons (including navbar and mobile links) redirect the user to the correct page in the site
+ All buttons produce the desired effect
+ External links open in a new tab/window and link to the correct site
+ Images load properly
+ Contact form correctly submits information and informs the user of the response

**Site content Testing**:
+ **Users who are not logged in**:
    + Are able to:
        + Register an account provided the username is not already taken.
        + View the Terms, Register, Login and Contact pages.
    + Are not able to:
        + Access Add, Edit, Delete or Profile pages.
        + Access Add/Edit/Delete buttons in various pages.

+ **Users who are logged in**:
    + Are able to:
        + Logout of their account.
        + View the Terms, Profile, Add, Edit Logout and Contact pages.
        + View all the terms they have added in their profile page.
        + Add, Edit and Delete terms they have created on both Terms and their Profile.
    + Are not able to:
        + Edit/Delete terms other users have added.
        + Access Login page.

**User called "Admin"**:
+ Are able to Edit/Delete any terms on the site.

**Validation**:
+ Form validation works throughout the site.
    + Add term, Edit term and Contact.

**Flash Messages**:
+ Flash messages appear correctly when a user has:
    + Successfully registered an account
    + Registered with a username already in use
    + Successfully logged in to their account
    + Successfully logged out of their account
    + Entered an incorrect username/password combination
    + Successfully added a word to the Gamersaurus
    + Successfully edited a word in the Gamersaurus
    + Successfully deleted a word in the Gamersaurus
    + Attempted to add a term already in the Gamersaurus

### Bugs

+ **Search Feature** - When trying to implement this feature I had set up my index key wrong producing a multitude of errors. I was using this piece of code:

    ```mongo.db.gamersaurus.create_index([("term", "text"), ("definition", "text"), ("example", "text")])```

    + What this ended up doing was creating a collection called "gamersaurus" within my database and applying the index to that. What I needed to use was this:

    ```mongo.db.thesaurus.create_index([("term", "text"), ("definition", "text"), ("example", "text")])```
    
    + This created the index in the appropriate location and my search function worked as intended.

+ **Buttons in Term Control** - I added a container for the search feature and decided to include an "Add Term" button with an if/else loop to manage the responsive styling.
    + My first attempt had the if/else loop containing the two different divs but this affected the form submission. 
        + To solve this I used jinja templating to change the top level divs for s4 and s6 based on ```{% if session.user %}```.
    + In an attempt to make the buttons the same size I converted my a tags to buttons but ran into issues with the form submission.
        + To solve this I changed my buttons back to a links and added the class of "button" to them which produced the same effect and a functioning site.

[Return to README.md](README.md).