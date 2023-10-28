@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100&family=Nothing+You+Could+Do&family=Nunito:wght@800&family=Sometype+Mono&family=Tangerine&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100&family=Macondo&family=Nothing+You+Could+Do&family=Nunito:wght@800&family=Sometype+Mono&family=Tangerine&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100&family=Macondo&family=Macondo+Swash+Caps&family=Nothing+You+Could+Do&family=Nunito:wght@800&family=Sometype+Mono&family=Tangerine&display=swap');
*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sometype Mono', monospace;
}
    :root
{
    --clr: #fff;
}
body {
    font-family: 'Macondo', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(180deg, rgb(255, 169, 169) 0%, rgb(255, 130, 157) 35%, rgb(255, 76, 91) 100%);
}

.story-container-parent {
    display: flex;
    max-width: 200%;
    overflow-x: auto; /* Enable horizontal scrolling for the parent container */
   
}

.story-container {
    min-width: 100%;
    height: 600px;
    padding: 20px;
    margin: 10px;
    background-color: #FFD3E0;
    border-radius: 20px;
    text-align: center;
    border: 5px solid #FF6B96;
    transition: margin 0.5s;
    max-height: 200px; /* Set a maximum height for the container */
    overflow: auto; /* Enable vertical scrolling for overflow text */

}

.story-container2 {
    min-width: 100%;
    height: 600px;
    padding: 20px;
    margin: 10px;
    background-color: #FFD3E0;
    border-radius: 20px;
    text-align: center;
    border: 5px solid #FF6B96;
    transition: margin 0.5s;
    max-height: 200px; /* Set a maximum height for the container */
    overflow: auto; /* Enable vertical scrolling for overflow text */

}

.story {
    font-size: 12px;
    line-height: 1.5;
    margin: 0;
    color: #FF4382;
    opacity: 1;
    transition: opacity 0.5s;
    text-align: center;
}
.storyNotif {
    color: #ff0000;
}

.fixed-text-box {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #e94467;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    z-index: 999;
    /* You can adjust the width and height as needed */
    width: 800px;
    height: 300px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.icon {
        font-size: 60px;
        position: fixed;
        top: 0;
        left: 0;
        color: #fff;

}
.navigation ul li a .icon {
    position: relative;
    display: block;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: #fff;
    transform: translateX(3px); /* Shift right by 3 pixels */
}

.notification {
    position: fixed;
    bottom: 10px;
    left: 10px;
    background-color: #ff457d;
    color: #fff;
    padding: 10px;
    font-family: 'Macondo Swash Caps', cursive;
    border-radius: 5px;
  }
  .highlight-word {
    color: #c368ff; /* Change this to the desired color */
}
