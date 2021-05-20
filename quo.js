let quotes=[

           'The best thing about a boolean is even if you are wrong, you are only off by a bit. <span style="float:right;color:#60ACAF;"><br>-Anonymous</span>',
           'Without requirements or design, programming is the art of adding bugs to an empty text file. <span style="float:right;color:#60ACAF;"><br>-Louis Srygley</span>',
           'Before software can be reusable it first has to be usable. <span style="float:right;color:#60ACAF;"><br>-Ralph Johnson<span> ',
           'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. <span style="float:right;color:#60ACAF;"><br>-Anonymous</span>',
           'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.<span style="float:right;color:#60ACAF;"><br>-Anonymous</span> ',
           'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. <span style="float:right;color:#60ACAF;"><br>-Gerald Weinberg</span>',
           'There are two ways to write error-free programs; only the third one works.<span style="float:right;color:#60ACAF;"><br>-Alan J. Perlis</span> ',
           'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. <span style="float:right;color:#60ACAF;"><br>-Anonymous</span>',
           'It’s not a bug – it’s an undocumented feature. <span style="float:right;color:#60ACAF;"><br>-Anonymous</span>',
           'One man’s crappy software is another man’s full-time job.<span style="float:right;color:#60ACAF;"><br>-Jessica Gaston<span> ',
           'A good programmer is someone who always looks both ways before crossing a one-way street. <span style="float:right;color:#60ACAF;"><br>-Doug Linder</span>',
           'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.<span style="float:right;color:#60ACAF;"><br>-Martin Golding</span> ',
           'Deleted code is debugged code. <span style="float:right;color:#60ACAF;"><br>-Jeff Sickel</span>',
           'Walking on water and developing software from a specification are easy if both are frozen. <span style="float:right;color:#60ACAF;"><br>-Edward V Berard</span>',
           'If debugging is the process of removing software bugs, then programming must be the process of putting them in. <span style="float:right;color:#60ACAF;"><br>-Edsger Dijkstra</span>',
           'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. <span style="float:right;color:#60ACAF;"><br>-Anonymous</span>',
           'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.<span style="float:right;color:#60ACAF;"><br>-Rick Cook<span> ',
           'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes. <span style="float:right;color:#60ACAF;"><br>-Keith Braithwaite</span>',
           'There are only two kinds of programming languages: those people always bitch about and those nobody uses. <span style="float:right;color:#60ACAF;"><br>-Bjarne Stroustrup</span>',
           'In order to understand recursion, one must first understand recursion. <span style="float:right;color:#60ACAF;"><br>-Anonymous<span>',
           'The cheapest, fastest, and most reliable components are those that aren’t there. <span style="float:right;color:#60ACAF;"><br>-Gordon Bell</span>',
           'The best performance improvement is the transition from the nonworking state to the working state. <span style="float:right;color:#60ACAF;"><br>-J. Osterhout</span>',
           'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. <span style="float:right;color:#60ACAF;"><br>-Seymour Cray</span>',
           'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. <span style="float:right;color:#60ACAF;"><br>-Mosher’s Law of Software Engineering</span>'

];

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <p><i class="fa fa-quote-left" aria-hidden="true"></i> ${quotes[index]}</p>
   </div>
    `;
    div.innerHTML=quote;
    
}