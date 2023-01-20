[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9717315&assignment_repo_type=AssignmentRepo)
# CMPSC 26X Homework 1

Before we start, Welcome to CMPSC 26X! Here at Blockchain@PSU, we're genuinely
excited to be teaching a 3-credit course here at Penn State, and we're glad to
have you along for the ride!

This first week's homework will be fairly simple: We'll be installing all of the
software and (most) dependencies we'll need for this course. After we do this,
we'll make a quick "Hello, World!" webpage, along with some pages utilizing
JavaScript functions that will help you understand basic HTML and JS syntax.

## Overview

We'll be installing the following software:

-   Visual Studio Code\*
-   Git
-   Node.JS and NPM

\*Sidenote: While not required, we **_highly_** recommend using VSCode for your
assignments in this course. If you want to use another IDE, that's OK, but you
are responsible for keeping track of any differences between assignment
descriptions and your personal versions. IDEs should not significantly affect
the structure of your code.

You'll also need to create a [GitHub](https://github.com) account if you haven't
already. We recommend (if you do not currently have a GitHub account) to make
one with your PSU email.

After installing all of the necessary software and creating a GitHub account,
we'll create a simple Express.js application that hosts a simple "Hello, World!"
page, along with some JavaScript functions given the HTML pages to view them.
These will be basic CMPSC-131-level problems, so you should be able to complete
these with relative ease.

## Installation

These steps are tailored towards Windows users. If you use a separate operating
system, you are responsible for installing the necessary software yourself.
Generally, the process for installation is easier to do on MacOS, and mildly
more complicated on Linux. There are guides on each respective website for
installation that you can follow.

To start, we're going to be installing a few different tools. If you've done web
development before, you may already have installed some, if not all, of the
software you'll need for this course. Regardless, we've provided some simple
install instructions and recommendations so you can get your app up and running.

In addition, you'll need to make a [GitHub](https://github.com) account with
your PSU email. We use GitHub Classroom for downloading, submitting, and grading
homeworks and projects.

### Installing Visual Studio Code

To install VSCode, head over to the
[Visual Studio Code Download Page](https://code.visualstudio.com/) and download
the stable version for your operating system. Installation should be relatively
straightforward. The only changes to the default settings during install we
recommend is on the "Select Additional Tasks" window, check the two
`Add "Open with Code" action` boxes. These aren't required, don't worry if you
forget them, but they're nice to have.
Note: Extensions will help a lot in VSCode, we would recommend LiveServer
specifically for running your code easily in the browser.

### Installing Git

To install Git, head over to the [Git Download Page](https://git-scm.com) and
download the latest Setup Installer version for your operating system. When
installing, we recommend you choose
`use Visual Studio Code as Git's default editor` when prompted. You can safely
leave the rest of the options at their default values (these vary based on your
OS, with the default options being the recommended ones for your OS).

Once you have Git installed, make sure to set your user parameters in git using
the Git CLI (the Git CLI installs alongside Git):

```bash
$ git config --global user.name <Your GitHub username in quotes>
$ git config --global user.email <Your GitHub email in quotes>
$ git config --global user.password <your GitHub password in quotes>
```

### Installing Node.JS and NPM

To install Node.JS and NPM, head over to the
[Node.JS Download Page](https://nodejs.org/en/) and download the **LTS Version**
(Don't download the Current version, as it may be unstable!). The only option we
recommend you change is the window asking to install additional tools for Native
Modules. We recommend you check this box. The rest of the options you can leave
as their defaults.

After installing Node.JS, you'll be prompted to install Chocolatey and the
additional modules. Any prior MacOS programmers will know of the existence of
Homebrew, which allows for easy software and package installation strictly
through the command line. Any Linux programmers will know about APT and Snap,
which does the same thing. Windows has a similar utility to this - Called
Chocolatey. We consider it to be extremely valuable, as it streamlines
installation of all kinds of programming tools, but it's purely optional. Go
ahead and install those next to finish up.

Note that you'll need to restart VSCode and any terminals you have open in order
to use Node and NPM in the command line. While we won't use Node.js for the
first few homeworks, we will use Node.js in the future.

### Did my Node installation work?

Sometimes your Node.JS installation (depending on your Windows account
privileges) does not properly set up PATH variables. PATH environment variables
are required to use the commands from anywhere in a terminal.

You can check your installation by running the following commands:

```bash
$ node -v
$ npm -v
```

If you get back a version number for both commands, you're done. If not, you'll
have to [set up your PATH variables](https://stackoverflow.com/a/27864253). This
is a relatively short process. You will have to restart any and all terminals
and IDEs in order for them to recognize the change of variables.

## Hello, World!

Now that we've installed all of our main dependencies, we'll start on our
"Hello, World!" webpage!

To start, generate the HW1 repository with GitHub Classroom. This repository
will contain this Homework01.md file, along with a folder titled `html`, which
will have some HTML files inside of it. Don't edit these files, they're here for
your reference only. You may find it valuable to take a moment to read through
the code, and understand it from the comments.

### Creating our "Hello, World!" Page (5 pts)

To start, we'll create a simple "Hello, World!" page that will simply display
"Hello, World!" and do nothing else.

Start by creating a file called `helloworld.html` inside of the `html` folder.
In this file, write the following line:

```html
<h1>Hello, World!</h1>
```

Go ahead and then open this file in your browser. An easy way to do this is to
copy the file path (in VSCode, you can right click -> Copy Path) and paste that
into your browser's address bar. You should see in large, bold letters the text
"Hello, World!"
If you installed Live Server as an extension in VSCode, you can simply right 
click on your html file and select 'Open with Live Server'. 

### Creating Something a Bit More Interactive (10 pts)

Now let's try making something more functional. We'll start by creating a new
file in `html` called `addnums.html`. We'll also create a new folder in the main
directory of the repository called `js`. In this new folder, add a file called
`addnums.js`.

Back in our `addnums.html` file, add the following:

```html
<body>
    <h1>Addition</h1>
    <input type="text" id="num1" placeholder="enter number 1 here" />
    <input type="text" id="num2" placeholder="enter number 2 here" />
    <p id="result">The result of the addition will appear here</p>
</body>

<script src="../js/addnums.js"></script>
```

In our `addnums.js` file, we'll add the following:

```js
// Function to get two numbers and add them together
function addNums() {
    // Find the items in the HTML page, and get their values
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Compute these, and make sure you convert them to integers
    var result = parseInt(num1) + parseInt(num2);

    // If we got some output that isn't a number...
    if (isNaN(result)) {
        // Print an error on bad input
        document.getElementById("result").innerHTML = "Invalid input";
    } else {
        // Otherwise, add the result to the HTML document
        document.getElementById("result").innerHTML = result;
    }
}

// Add event listeners so the functions are called whenever the input changes
document.getElementById("num1").addEventListener("keyup", addNums);
document.getElementById("num2").addEventListener("keyup", addNums);
```

Go ahead and open the `addnums.html` file in your browser. You should see two
boxes to put text into. If you type a number into both of these boxes, you
should see some text appear that represents the addition of these two numbers.

## Creating More Functions

Now that you know the general format of the directories, we'll start creating
some more functions. You'll create the files listed below in the `/js/` folder,
and implement the required code for them. Reference the `.html` files in the
`/html/` folder for element IDs, testing, etc. You are not allowed to use any
external libraries.

### power.js (25 pts)

Create a function that, given the integer inputs in `num1` and `num2`, returns
the computation of `num1` to the power of `num2` and writes it to the `result`
element. You cannot use any exponent functions, you must use multiplications in
your implementation. (Hint: use a for loop)

### basechange.js (30 pts)

Create a function that, given the integer inputs in `num` and `base`, converts
`num` from base 10 to base `base`, and writes it to the `result` element.
Element `base` comes from a dropdown selection menu, and can only be octal or
binary. In the case that nothing is selected, please replace the text at result
with `"No base inputted"`.

### colorchange.js amd colorchange.html (30 pts)

Create a function that, given an input hex value, will change the color of the
test in `result` to the color input through hex. Note you will have to add your
own event listener for this one, as we removed it. (Hint: you will have to edit
the styling of `result`).

## What You'll be Graded On

You will be graded on having all of the HTML and JS files as instructed, as well
as the correctness of the JS files excluding `addnums.js`. In total, you should
have five HTML files
`helloworld.html, addnums.html, power.html, basechange.html, colorchange.html` and
four JS files `addnums.js, power.js, basechange.js, colorchange.js`.
