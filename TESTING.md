## Testing

### Code Validators

### Responsiveness

### Browser Compatibility

### Testing User stories

+ #### User Goals    

+ #### Site Owner Goals

### Additional Testing

### Bugs

+ **Search Feature** - When trying to implement this feature I had set up my index key wrong producing a multitude of errors. I was using this piece of code:

    ```mongo.db.gamersaurus.create_index([("term", "text"), ("definition", "text"), ("example", "text")])```

    + What this ended up doing was creating a collection called "gamersaurus" within my database and applying the index to that. What I needed to use was this:

    ```mongo.db.thesaurus.create_index([("term", "text"), ("definition", "text"), ("example", "text")])```
    
    + This created the index in the appropriate location and my search function worked as intended.

+ **Buttons in Term Control** - I added a container for the search feature and decided to include an "Add Term" button with my own if/else loop to manage the responsive styling.
    + My first attempt had the if/else loop containing the two different divs but this affected the form submission. 
        + To solve this I used jinja templating to change the top level divs for s4 and s6 based on ```{% if session.user %}```.
    + In an attempt to make the buttons the same size I converted my a tags to buttons but ran into issues with the form submission.
        + To solve this I changed my buttons back to a links and added the class of "button" to them which produced the same effect and a functioning site.

[Return to README.md](README.md).