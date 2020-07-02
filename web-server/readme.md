* NOTES : WEB SERVERS

```
   - npm init -y ;
   - npm i express@4.16.4 ;
   - node src/app.js ;
   - // Lesson 1 : Hello Express! ;
   - VISIT localhost:3000/ --- after running node src/app.js command;
   - Shut down : Press ctrl + c;
   - Run the server: nodemon src/app.js ;
   - see in browser: http://localhost:3000/help ;
   - see in the browser: http://localhost:3000/about ;
   - see in the browser: http://localhost:3000/weather ;
   - // Lesson 2: Serving up HTML and JSON ;
   - see in the browser: http://localhost:3000/help.html;
   - see in the browser: http://localhost:3000/about.html;
   - // Lesson 3: Serving up Static Assets ;
   - // Lesson 4: Serving up CSS, JS, Images and More ;
   - // Dynamic Pages with Templating: 
          npm i hbs@4.0.1 ;
   - Delete static file from public folder(index.html & about.html & help.html);
   - // Customizing the Views Directory;
   - // Advanced Templating: 
   - // 404 Pages: see in the browser--> http://localhost:3000/help/data + http://localhost:3000/help/test;
   - // Styling the Application : Part 1 & 2;
   - Run this command nodemon src/app.js -e js,hbs;
   - ACCESSING API FROM BROWSER:
   - See in browser: localhost:3000/products?search=games&rating=5 ;
   - Run the server: nodemon src/app.js -e js,hbs ;
   - See in browser: http://localhost:3000/weather?address=boston ;
   - Run now npm i request@2.88.0 ;
   - Run this nodemon src/app.js -e js,hbs ;

   * HEROKU :
   - heroku -v ;
   - heroku login ;
   - git --version;
   - 


```