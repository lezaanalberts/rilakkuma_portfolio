import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <div className="img">
              <img className="profilepicture" src="https://www.freeiconspng.com/thumbs/rilakkuma-icon-png/rilakkuma-icon-png-5.png" alt=''></img>
            </div>
        
            <div className="navbar">
              <div className="body1" href="#work">
                <p>My Work</p>
              </div>
              <div className="body2" href="#about">
                <a href="#aboutme"><p>About Me</p></a>
              </div>
              <div className="body3" href="#contact">
                <a href="#contact-form"><p>Contact</p></a>
              </div>
            </div>

            <div className="display" name="#work">
             
            </div>


                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src="https://preview.redd.it/daily-rilakkuma-photo-v0-84c6ivzkk8x91.jpg?width=640&crop=smart&auto=webp&s=6009a4c96f94f76a26818a309bb8da82c9f43b75" border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Rilakkuma fanpage</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                      This adorable fanpage has been made with HTML, CSS, JavaScript and a lot of love for Rilakkuma. This interactive page is a wonderful welcome to the world of Rilakkuma and Friends!
                    </div>
                    <button className="readbutton">more info</button>
                </div>
              

                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEGzWpwUvAyi7Mt52iFzwgj0n0Z4s1hsZj9br1Un1WHl0czjIsilALZt1ERFEY_T6oX4&usqp=CAU" border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Rilakkuma Sleep</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Dive into the world of Rilakkuma with <strong>Rilakkuma Sleep</strong>. Browse your favourite stories and drift off to sleep with this relaxing layout and theme.
                    </div>
                    <button className="readbutton">more info</button>

                </div>
              
                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src="https://cutekawaiiresources.wordpress.com/wp-content/uploads/2013/03/16_1280_1024.jpg?w=848" border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Lucky Rilakkuma</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
<strong>Lucky Rilakkuma</strong> is a short course that explains and encourages the importance of feeling lucky and having friends close by. 
                    </div>
                    <button className="readbutton">more info</button>

                </div>

                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src="https://i.redd.it/8ambpbkpvvh81.jpg" border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Rilakkuma & Friends</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                       <strong> Rilakkuma & Friends</strong> is a child-safe website made to highlight the importance of friendship and online safety. Profiles have the option to put on 'Rilakkuma Parent' , a mode to monitor your child's activity.
                    </div>
                    <button className="readbutton">more info</button>

                </div>


                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src="https://i.redd.it/glfjvgnu6hw51.jpg" border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Rilakkuma's Games</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <strong>Rilakkuma's Games</strong> is a website filled with an assortment of Rilakkuma games. Dress up, roleplaying, simulator games. You know it! Enjoyment for all ages.
                    </div>
                    <button className="readbutton">more info</button>

                </div>


                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src="https://i.redd.it/vcz4cdy0yt861.jpg" border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Rilakkuma's Recipes</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                          <strong>Rilakkuma's Recipes </strong>is a website created with recipes from all over the world, from all cultures and religions. Downloading and creating recipes are just some of the wonderful functions that <strong>Rilakkuma's Recipes</strong> offer!
                    </div>
                    <button className="readbutton">more info</button>

                </div>


        <div className="container" id="contact-form">
            <form action="action_page.php">
                <img className="form-img" src="https://www.freeiconspng.com/uploads/rilakkuma-icon-png-8.png" alt=""></img>
                <div className="labels">
                    <label for="name">First Name:</label><br></br>
                    <input type="text" id="name" name="name"></input><br></br>
                </div>

                <div className="labels">
                    <label for="surname" placeholder="Last Name">Last Name:</label><br></br>
                    <input type="text" id="surname" name="surname"></input><br></br>
                </div>

                <div className="labels">
                    <label  for="email" >E-mail Address:</label><br></br>
                    <input type="email"></input><br></br>
                </div>
                <div className="labels">
                    <textarea id="enquiry" style={{height:'200px'}}> </textarea><br></br>
                </div>

                <div className="labels">
                    <input className="readbutton" type="submit" value="submit"></input>
                </div>
            </form>
        </div>

        <div id="aboutme" className="aboutme-section">
            <img className="aboutme-img" alt="" src="https://i.redd.it/0t3400yfopsa1.jpg"></img>
            <div className="aboutme-text">
                <h1>About Me: Inside the mind of Lezaan Alberts</h1>
                <h2>where to start? The beginning I suppose.</h2>
                <p>
                    well hello there! I'm the creator of this lovely website! i am currently studying
                    coding and frontend development! this has been an absolute treat to bring my favourite characters
                     (Rilakkuma ofc) and my skills together in a fun and interactive website. <br></br>
                </p>
                <p>
                     all ideas and project names have been squished out of my own noggin. no plagarism here, we don't do that...
                     anywho! all images have been graciously retrieved from google, so credits go to them! 
                </p>
            </div>
        </div>
              
      </header>
    </div>
  );
}

export default App;
