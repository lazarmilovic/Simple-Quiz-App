# Simple-Quiz-App
A simple Quiz app built using JS and PHP.

![alt text](https://github.com/lazarmilovic/Simple-Quiz-App/blob/master/img.png?raw=true);


A user can start the quiz by clicking the button "Start". In case user clicks any answer before starting the quiz, an alert will be displayed with "Please start the quiz first!". 
By clicking start, it will generate 10 random questions from the database which will be displayed one by one. There are four possible answers given and after clicking an answer, user will get an alert with the confirmation that the answer is right (if the user has clicked the rigth answer) or an alert with the the right answer (if the provided answer is wrong). 
The questions and answers will be fetched from the database using PHP and using array_column will be divided into 5 different arrays- one for the questions, four for possible answers and one for the right answers for each question. 
After providing the answer, JS function will automatically 'shift' first element of each array and the quiz will go on. 
After providing answers on all 10 questions, the user will get an alert with how many right answers (s)he provided. 
During the quiz, the user can also see the number of correctly answer questions in right corner above the question and the question he is curently on, shown in a format 'No. of question the user is currently on/10'. 
