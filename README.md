# LegoBuilder
Lego Builder dummy application

To run the DB:
move your cmd to the db folder and run:
json-server --watch db.json

to check if its running and accessing the json as a mock db, check your browser at:
http://localhost:3000/ under Resources, /users, /available-sets and /available-blocks should be listed

then open a new cmd window and point it to the legobuilderapp folder and run
ng serve


## choices made:
Reusable components
Normally i would define certain UI elements as reusable components like the search field, the image which changes color if you dont have it in your collection etc. for now that would be a little bit too much so i did not do that

Object Classes
The LegoBlock class is now the same as it's parent the Lego class, normally you can add extra methods and properties here that are only for LegoBLocks, and even make childeren derived from LegoBlocks which might have different methods and properties per block type. You can also add interfaces to that to make sure that maybe all LegoBlock instances have a stackOnTop() method or whatever method you want all of them to have. Because of the time i skipped all of that and just made the LegoBlock class to differentiate from the LegoSet class while not being the generic Lego class. 

SCSS
Things like fonts, colors etc. van be put into variables and generic classes can be created as mixins so that other classes can extend them for example a popup that just has a different color or height can extend your regular popup mixin.

Data
Because the assignment was more about Angular, I chose to make the data easy to use for my components, it might required multiple queries / table joins and data transforms on the backend or frontend after fetching to actually get a data structute like this...

Images
Images and icons are now loaded as is where icons could be loaded via an icon font, spritemap and in svg format to improve scalability...

Translations
Now i use regular text in the html files but normally these would be translation file refrences with the | translation pipe