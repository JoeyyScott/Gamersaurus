<h1 align="center">The Gamersaurus</h1>

[View a live version of the site here.](https://gamersaurus-joeyy.herokuapp.com/)

I have created this project (Milestone project 3) as part of my Full Stack Web Development course with [Code Institute](https://codeinstitute.net/).

The Gamersaurus is a community built thesaurus on terms you would most likely encounter in the gaming world.

![Am I responsive screenshot]()

---

## Contents

- [**User Experience Design (UXD)**](<#user-experience-design>)

  - [Project Goals](<#project-goals>)
  - [Content Requirements](<#content-requirements>)
  - [Importance and Feasibility chart](<#importance-and-feasibility-chart>)
  - [User Stories](<#user-stories>)
  - [Website Structure](<#website-structure>)
  - [Design Decisions from UXD](<#design-decisions-from-uxd>)
    - Colour Scheme
    - Images
    - Typography
  - [Wireframes](<#wireframes>)
  - [Design Changes](<#design-changes>)

- [**Database Schema**](<#database-schema>)

- [**Features**](#features)

- [**Technologies**](#technologies)

- [**Testing**](#testing)

- [**Deployment**](#deployment)

- [**Credits**](#credits)
  
  ___

## User Experience Design

### Project Goals

The goal of this project is to create an online thesaurus of the different slang and abbreviations you would come across in the gaming world. Each term in the thesaurus will have a description, example and who added the term.

### Content Requirements

The main points I want to achieve with this project are:

+ To provide users with an online thesaurus about Gamer terms.
+ To showcase my skills as a web developer using HTML, CSS, JavaScript and Python.
+ To showcase my skills using MongoDB, Heroku and Flask.
+ To help gamers understand and collate all the words and phrases used by gamers.

### Importance and Feasibility chart

Opportunity/Problem | Importance | Viability/Feasibility
:-------- |:--------:|:--------:
A. Users able to login  | 5 | 5
B. User can submit terms | 5 | 5
C. User are notified of their actions | 5 | 4
D. Users can view 3 most recents | 3 | 3
E. User can search for terms | 4 | 4

### User stories

- #### User goals

    + As a **user**, I want to be able to view all the terms currently added.
    + As a **user**, I want to understand the main purpose of the site.
    + As a **user**, I want be able to intuitively navigate through the site.
    + As a **user**, be able to make my own account and submit terms to the site.
    + As a **user**, be able to contact the site owner with any queries I have regarding the site.

- #### Registered User Goals

    + As a **registered user**, I want to be able to log in and out of my account.
    + As a **registered user**, I want to be able to submit terms of my own to the site.
    + As a **registered user**, I want to be able to edit any terms I've submitted to the site.
    + As a **registered user**, I want to able to delete any terms I've submitted to the site.

- #### Site Owner Goals

	+ As a **site owner**, I want to provide the user with the essential information required to understand the site's purpose.
	+ As a **site owner**, I want the user to be able to navigate to other areas of the site.
	+ As a **site owner**, I want a user to be able to view the dictionary without having an account.
	+ As a **site owner**, I want the user to be able to seemlessly make an account and submit terms to the site.
	+ As a **site owner**, I want the user to be able to edit and delete terms they have added.
	+ As a **site owner**, I want to include links to my GitHub and LinkedIn profiles so the user can view other projects I have contributed to.

### Website Structure

Structure of the website whilst not being logged in:

![Not logged in structure](static/images/readme/structurenotloggedin.png)

Structure of the website whilst being logged in:

![Logged in structure](static/images/readme/structureloggedin.png)

###  Design Decisions from UXD

#### Colour Scheme

![Colour Scheme](static/images/readme/colourscheme.png)

Using a combination of [coolors.co](https://coolors.co/) and [Accessible Color Generator Tool](https://learnui.design/tools/accessible-color-generator.html) I was able to create a colour scheme that uses contrasting blues and yellows to convey the majority of the content as it matches the colours used in the Gamersaurus logo. The colour scheme will remain consistent throughout buttons, the overall design of the site and where information is presented back to the user based on their actions.

+ #000D24 - Dark blue from logo that makes up the background colours.
+ #F3CA40 - Yellow colour from logo which will be used for titles and outlines.
+ #FCF7F8 - Whitish colour used for the main bodies of text in the site.
+ #C0960C - A darker yellow colour to use as hover states.

I tested my colour contrasts against the AAA guidelines using [this tool](https://learnui.design/tools/accessible-color-generator.html) as mentioned in my technologies section. I have included a picture below as proof:

![Accessible Colours](static/images/readme/aaa-guidelines.png)

---

#### Images

**Logo image**:

![Logo image](static/images/logo.png)

**Background image**:

![Background image to be tiled](static/images/background.png)

+ This is a logo I created myself using GIMP and 2 icons from [Flat Icon](https://www.flaticon.com). I used the colour from inside the book as a background for the tileable image.
+ The two icons I used were Dictionary [here](https://www.flaticon.com/free-icon/big-dictionary_85601?term=dictionary&page=1&position=1&page=1&position=1&related_id=85601&origin=search) and Controller [here](https://www.flaticon.com/free-icon/console_686589?term=controller&page=1&position=2&page=1&position=2&related_id=686589&origin=search).

#### Typography

Throughout the site two main fonts will be used. Headers and titles will use [SchoolBell](https://fonts.google.com/specimen/Schoolbell?query=c&category=Handwriting&preview.text=Gamersaurus&preview.text_type=custom) and associated text will use [Rock Salt](https://fonts.google.com/specimen/Rock+Salt?category=Handwriting&preview.text=Gamersaurus&preview.text_type=custom&query=rock+salt).

These SchoolBell font was chosen as it resembles handwriting on a school white board which is assoicated with learning and I felt it an appropriate fit for the purpose of the site. Rock Salt was chosen as a complimentary font as Google suggested it as a popular pairing with SchoolBell and it provides a non obtrusive font to display information in the thesaurus.

### Wireframes

| Mobile | Tablet |  PC  |
| :----: |:-----: | :--: |
| [index.html](wireframes/mobile/index-mobile.png) | [index.html](wireframes/tablet/index-tablet.png) | [index.html](wireframes/pc/index-pc.png) |
| [thesaurus.html](wireframes/mobile/thesaurus-mobile.png) | [thesaurus.html](wireframes/tablet/thesaurus-tablet.png) | [thesaurus.html](wireframes/pc/thesaurus-pc.png) |
| [register.html](wireframes/mobile/register-mobile.png) | [register.html](wireframes/tablet/register-tablet.png) | [register.html](wireframes/pc/register-pc.png) |
| [login.html](wireframes/mobile/login-mobile.png) | [login.html](wireframes/tablet/login-tablet.png) | [login.html](wireframes/pc/login-pc.png) |
| [profile.html](wireframes/mobile/profile-mobile.png) | [profile.html](wireframes/tablet/profile-tablet.png) | [profile.html](wireframes/pc/profile-pc.png) |
| [contact.html](wireframes/mobile/contact-mobile.png) | [contact.html](wireframes/tablet/contact-tablet.png) | [contact.html](wireframes/pc/contact-pc.png) |
| [404.html](wireframes/mobile/404-mobile.png) | [404.html](wireframes/tablet/404-tablet.png) | [404.html](wireframes/pc/404-pc.png) |
| [Add/Edit Word](wireframes/mobile/addword-mobile.png) | [Add/Edit Word](wireframes/tablet/addword-tablet.png) | [Add/Edit Word](wireframes/pc/addword-pc.png) |

### Design Changes

+ **Duplicate Gamersaurus link** - I originally was going to include a "Gamersaurus" link in the nav bar but opted to remove it to save screen sapce and remove redunancy as the logo redirects to the same link.

## Database Schema

I decided to use MongoDB Atlas as as cloud database service to create and store the data collections associated with this project. I have set the database up as follows:

MongoDB Atlas was the cloud database service used to create and store the database collections for this project:

### Dictionary Collection

|       Key     |         Value          |
| :-----------: | :--------------------: |
| _id:          | ObjectId("unique_id")  |
| term:         |        "string"        |
| definition:   |        "string"        |
| example:      |        "string"        |
| submitted_by: |        "string"        |


### User Profile Collection

| Key | Value |
| :---: | :---: |
| _id: | ObjectId("unique_id") |
| username: | "string" |
| password: | "string" |


#### [Back to top](#contents)

---

## Features

### Existing Features

The header can be accessed and viewed throughout all pages in the site.

Included in the **header** is: 

+ **Brand Icon and Name**: Provides a link to the Gamersaurus to allow the user to view it at any point.
+ **Nav Links**: Provides a way for the user to view the other pages on the site.
    + If the user is not logged in they will see Home, Login, Register and Contact.
    + If the user is logged in they will see see Home, Profile, Add Term, Logout and Contact.
    + **Mobile**: On the mobile header, all users will see the brand logo and name and the links moved into a side nav.

Included in the **footer** is:

+ **Social media links**: Which will take you to the various social media connnections for the site. (These links will point to the homepage for the associated social media site as the brand's socials do not exist at this point in time).

Included in **gamersaurus.html** is:

+ **View all terms currently stored** - Contains all the terms currently stored within the thesaurus collection.
    + Each term is contained within a collapsible which displays the term, and edit/delete buttons if the session user is the user who matches the ```submitted_by``` value within the database.
    + Each term can be expanded to show data in the following form:

        ```
        Definition: term.definition
        Example: term.example
        Submitted by: term.submitted_by
        ```

Included in **profile.html** is:

+ **View their own terms** - Contains all terms the session user has added to the gamersaurus.
    + Each term is contained within the same collapsible used on the gamersaurus page.
+ **Add term button** - Redirects the user to "add_term.html".

Included in **add_term.html** is:

+ **Form for term data**: Can be filled out with a term, definition, example (with associated validation) and then submitted to the database.
    + This functionality is handled by python upon form submission.
    + There are checks to make sure:
        + The term doesn't already exist in the database.
        + The data submitted passes all validation.

Included in **edit_term.html** is:

+ **Form for term data**: Contains fields for term, definition, example (with associated validation) which is auto-filled from the termID used to generate the page.
    + There is an "Edit term" button as well as "Cancel" which provide a way for the user to confirm or cancel their action.

Included in **register.html** is:

+ **Registration form**: Contains fields for username and password (with associated validation).
    + This functionality is handled by python upon form submission.
    + There are checks to make sure:
        + The username doesn't already exist.
        + The data submitted passes all validation.

Included in **login.html** is:

+ **Login form**: Contains fields for username and password (with associated validation).
    + This functionality is handled by python upon form submission.
    + There are checks to make sure:
        + The username exists in the database.
        + The username and password matches that record in the database.
        + The data submitted passes all validation.
    
Included in **contact.html** is:

+ **Contact Form**: Can be filled out with a name, email and message query (with associated validation) and submitted to contact the website owners.
    + The form functionality is handled by emailJS in the script.js file. 

### Features to be added

#### [Back to top](#contents)

---

## Technologies

### Languages

+ [HTML](https://en.wikipedia.org/wiki/HTML) - Used as the main language for structuring the website.
+ [CSS](https://en.wikipedia.org/wiki/CSS) - Used as the main language for styling the website.
+ [JavaScript](https://www.javascript.com/) - Used to import and initialize certain functions for use throughout the project.
+ [Python](https://www.python.org) - Used as the main coding language to generate the site, handle the database and user login system.

### Frameworks, libraries and programs
+ [GIMP](https://www.gimp.org) - I used this programme to design the background image, wireframes and favicon image.
+ [coolors.co](https://coolors.co) - I used this tool to generate a colour scheme based on the RuneScape theme.
+ [Accessible Color Generator](https://learnui.design/tools/accessible-color-generator.html) - I used this tool in conjunction with coolors.co to provide a better colour contrast for accessibility. 
+ [Font Awesome](https://fontawesome.com/) - I used the Font Awesome icon library to provide icons for some of my hints, my home button and my footer links. 
+ [GitPod](https://gitpod.io) - GitPod was the online IDE (Integrated Development Engine) I used to develop this site.
+ [Git](https://git-scm.com) - Git is an open source version control system where you can commit changes to the associated Github repository and push changes to Github pages.
+ [FavIcon](https://favicon.io/) - I used this tool to convert an image I made into icon form and provide the code (stated in HTML comments) to link this icon to index.html.
+ [Am I Responsive?](http://ami.responsivedesign.is/) - I used this tool to easily display the responsiveness of my site for my README.md introduction.
+ [emailJS](https://www.emailjs.com/) - I used this tool to add functionality in the form of an email service to the Suggest a Question modal.
+ [jQuery](https://jquery.com/) - I used the jQuery library to provide access to a multitude of functions/methods, most notably the ```$.getJSON('');``` function which I used to load my questions in from a JSON file.
+ [Regexr](https://regexr.com/) - I used this tool to test different RegEx syntax to help with my form valdiation.
+ [Heroku](https://dashboard.heroku.com/) - A cloud platform that was used to deploy and run the code pushed to the associated GitHub repository.
+ [MongoDB](https://www.mongodb.com/) - A cloud database service that allows for creation, modification, deletion and storage of databases collections used in the application.
+ [Materialize](https://materializecss.com/) - A CSS framework that allows for responsive design to be applied to the entire site.

#### [Back to top](#contents)

---

## Testing

I created a separate file for the testing process which can be located [here](TESTING.md).

#### [Back to top](#contents)

---

## Deployment

### Project Inception

1. This project was created using [GitHub](https://github.com) and Code Institute's project template [here](https://github.com/Code-Institute-Org/gitpod-full-template) by clicking "Use this template".
2. I named this project "gamersaurus" as it is the name of the website.
3. Once the repository had been created I clicked the "Gitpod" button which is a Firefox extension ([here](https://addons.mozilla.org/en-GB/firefox/addon/gitpod/)) that creates a workspace within GitPod which is where I coded the project.
4. Following [Code Institute's](https://codeinstitute.net/) lessons the 4 main commands I used were:
    + ```git status``` (which allows me to check which files have been modified and if any are ready to be committed)
    + ```git add .``` (which adds all changed files within my project's directory to be committed)
    + ```git commit -m "[TYPE] Reason"``` (which commits all changes to my project using a category prefix and a specific reason for that commit)
    + ```git push``` (this command pushes all committed changes to the live version of my site)

### Deployment to Heroku

*Before creating a Heroku app make sure your project has these two files:
    + **requirements.txt** - You can create one by using ```pip3 freeze --local > requirements.txt```
    + **Procfile** - You can create one by using ```echo web: python run.py > Procfile```

**Create application:**
1. Navigate to Heroku's site [here](https://www.heroku.com/).
2. Register and/or Login as applicable.
3. Click on the new button in the top right and select "Create new app".
4. Enter the app name and region.
5. Click the create app button.

**Set up connection to Github Repository:**

1. Click the Deploy tab and select GitHub - Connect to GitHub.
2. Sign into GitHub if not already.
1. A prompt to find a Github repository to connect to will then be displayed.
1. Enter the repository name for the project and click search.
1. Once the repo has been found, click the connect button.

**Set environment variables:**

1. Click the Settings tab and click the Reveal Config Vars button and add the following:

```
| Key | Value |
| :-: | :---: |
| IP  | 0.0.0.0 |
| PORT | 5000 |
| MONGO_DBNAME | Your MONGO_DBNAME |
| MONGO_URI | Your MONGO_URI |
| SECRET_KEY| Your SECRET_KEY |
```

+ **MONGO_DBNAME** - This is the name of the database you are trying to connect to within MongoDB.
+ **MONGO_URI** - This can be found on the MongoDB website by following these steps;
    + In the clusters tab click connect on the associated cluster.
    + Click connect > Connect your application
    + Copy the string and substitute the password (from Database access not your MongoDB site password) and "myFirstDatabase" to your DB name.
+ **SECRET_KEY** - This is a custom string set up to secure the application and to keep client-side sessions secure.

**Enable automatic deployment:**
1. Click the Deploy tab again.
2. Under Automatic deploys section, choose the branch you want to deploy from and then click the "Enable Automatic Deploys" button.
3. Click the "Deploy Branch" button underneath to deploy the app the Heroku servers.

### Creating a local clone

#### [Back to top](#contents)

---

## Credits

### Content

This section includes areas/sections of code and properties I was unaware of. I have also included sources from where I have adapted/changed code used in the projects throughout my course as I figured it was better practice to state as such to avoid any penalizations or copyright violations.

### Media

#### Images

### Acknowledgments

#### [Back to top](#contents)

---