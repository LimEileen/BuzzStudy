# BuzzStudy
For IP project.
This is a Quiz Web Application. The overview of this web application, is for users that wanting to know and test on their current knowledge or memory on the animals and cartoon shows. This web app have two different categories of topics, different kinds of animals and cartoon show's questions that will be tested. By answering the quiz, there will also achieve and collect points which can use to redeem rewards and badges.

## GitHub Link: 
- https://github.com/LimEileen/BuzzStudy/settings
## Website Link: 
- https://limeileen.github.io/BuzzStudy/

## Design Process:
This web application are targeted to users aged from 7 to 12 that are intrested in facts of animals, or trying to use the memory they have, to have a quiz on the caterogires of animals and cartoon shows. Users may have forgotten on the shows that have watched when they were still young. This set of questions can help users to look back or even now, the cartoon shows they have watched before. It is their childhood memories. As for the animals questions, for users that may want to know more about animals, they can try this quiz, and they can keep trying to get a memory of it. 

## Features
1. Login Page
    - Allows users to store their name and collected points.
2. Navigation Bar
    - Allows users to click and direct to the relevant pages.
3. Instruction Page
    - This page contain some of the rules and instructions about the quiz. 
    - If users want to continue after reading the instructions, there is a "Start Quiz" button for the user to continue to quiz page. 
    - If users don't want to continue, they can click on the "Quit Quiz" button to go back to the homepage.
4. Result Page
    - Shows the final results to the users.
    - "Try Again" button for users to retake the quiz, if they are not happy with their results.
    - "Home" button for users to return back to homepage.
5. Quiz Page
    - Page that show question and options for users to click on.
    - Each quiz containe 10 questions. After 10 questions, users will be directed to result page.
    - There is also a 30 seconds countdown. If the time ended, users are not able to click on any options.
6. Profile Page
    - Contain user's information such as name, collected points, rewards and badges.


### Features to Implement in the future:
1. More questions:
    - Allow users to have a more questions to answer, easier to achieve points.
2. More categories:
    - Involve more categories for users to learn.
    - Attract more users as they can learn a lot of things by using this website.
3. More badges:
    - For now, we only have one badge for each quiz.
    - Hope to implement more badges to encourage users to challenge the quiz.
4. More rewards:
    - As the targeted user are primary students, they will get attracted by the rewards, as it's like a present to encourage them for completing the quiz.

## Testing:
Test# | Expected Result | Actual Result | Pass/Fail
------------ | ------------- | ------------ | ------------- 
Navigation Bar | Able to navigate to the correct pages | Able to navigate | Pass
Login Button | Able to login | Able to login | Pass
Store Users' Data | Able to store users name and collected points | Not able to store users' data | Fail
Try Again Button | Able to re-take the quiz | Able to re-take the quiz | Pass
Home Button | Able to go back to home page | Able to go back to home page | Pass
Log Out Button | Able to log out| Able to go back to login page | Pass
Next Button | Able to go to next questions | Able to go to next questions | Pass
Timer Countdown | 30 second coutdown for each question | Able to count down | Pass
Quiz Options | Users are ble to choose their own answer | Able to choose option | Pass
Disable Option After Clicking| Disable other options if the users have clicked on one option | Able to disable other options | Pass
Disable Option After TimeUp | Disable all options if the users haven't click on any option after 30 seconds | Disable to click on options after 30 seconds | Pass
Redeem Rewards | Able to redeem rewards | Not able to redeem the rewards | Fail
Collect Badges | Able to collect badges | Not able to collect badges | Fail
Display User's name | Able to display user's name | Unable to display user's name | Fail
Display User's points | Able to display user's points | Unable to display user's points | Fail
Deduct points | Deduct users' collected points after redeem badges and rewards | Unable to deduct points after redeem | Fail

## Technologies
- [HTML]
    - This project uses **HTML** a standard markup langauge for creating web pages, web applications, to format the content and structure how the website wil be.
- [CSS]
    - This project uses **CSS** to have the style for HTML.
- [Javascript]
    - This project uses **Javascript** to make the website interacting and more instresting.
- [JQuery](https://jquery.com)
    - This project uses **JQuery** to simplify DOM manipulation.
- [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
    - This project uses **Bootstrap** to design the content layout for responsive pages, and navigation bar with lesser efforts.
- [Google Fonts](https://fonts.google.com/)
    - This project uses **Google fonts** have a better user experience and a sense of great typography.
- [Adobe Xd](https://www.adobe.com/sea/products/xd.html)
    - This project uses **Adobe Xd** for drafting out the ideas of the project.
- [Adobe Illustrator](https://www.adobe.com/sea/products/illustrator/free-trial-download.html)
    - This project uses **Adobe Illustrator** for drawing out most of the assets. The badges, rewards, background. 
- [RestDB](https://restdb.io/)
    - This project uses **RestDB** by creating our own API, get the endpoint of the quiz, profile, key and API Link.
- [LottieFiles](https://lottiefiles.com/featured)
    - This project uses **LottieFiles** for the loading animation that will be shown.

## Credits
1. Contents:
    * All the questions in the quiz, cartoon questions used in this site were obtained from https://www.funtrivia.com/en/ForChildren/Assorted-Cartoons-for-Kids-16349.html, https://www.beano.com/posts/frozen-quiz-how-well-do-you-know-elsa, https://quizizz.com/admin/quiz/580bfa76e18081560ea81c95/how-much-do-you-know-zootopia. 
    * Animals questions used in this site were obtained from https://www.wrs.com.sg/en/singapore-zoo/animals-and-zones.html and https://yowieworld.com/blog/kids-trivia-questions-2/.
2. Codes:
    * All the wireframe in the quizzes info page, quizzes page and quizzed results page were inspried from https://www.youtube.com/watch?v=pQr4O1OITJo
    * Wireframe for login page were inspried by 
3. Fonts:
    * The typography in this project were obtained from [Google Fonts](https://fonts.google.com/).
4. Media:
    * The assets drawn, for example, the background, rewards, badges
    * Cartoon questions used in this site were obtained from https://www.funtrivia.com/en/ForChildren/Assorted-Cartoons-for-Kids-16349.html.
    * Frozen questions used in this site were obtained from https://www.beano.com/posts/frozen-quiz-how-well-do-you-know-elsa. 
    * Zootopia questions used in this site were obtained from https://quizizz.com/admin/quiz/580bfa76e18081560ea81c95/how-much-do-you-know-zootopia. 
    * Animals questions used in this site were obtained from https://www.wrs.com.sg/en/singapore-zoo/animals-and-zones.html. 
    * Animals questions used in this site were obtained from https://yowieworld.com/blog/kids-trivia-questions-2/.

## Acknowledgements
- We received inspiration for this project thinking to create a quiz that is fun, relax and knowledgeable for the users. It will not be too stressful for them, and also make them feel happy when they answer the questions they know.
- We received the helped from our mentors whenever we are in doubt.
