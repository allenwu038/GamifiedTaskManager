# Gamified Task Manager

The goal is to create a gamified task manager app (read: fancy to-do list with built-in motivators) that surpasses performance of other task manangement apps with its aesthetic design and element of incentive. 

The core of this app is a to-do list, and when users finish daily/weekly/monthly tasks, they can earn coins which they can then use to the purchase different outfits/furniture for their character and their living space (with different aesthetics so we can cater to different tastes of users). There can also be different levels to grow towards that open up more stores and options for products to buy with game coins. There could even be a community aspect built in where users can add other users and and gift items. 

In terms of display, there will be two main screens: the to-do list and the character game space.


## Developers
### Getting Started
To work on this project, you'll want to have a local working copy of the repository on your machine. Here are the steps you want to follow:

1. Clone the repository to your local machine.
2. Open VS Code and open the repository folder.
    + Using the menu bar, go to _File > Open Folder_ and navigate to the repository.
    + Alternatively, you can use the shortcut _Cmd-K O_ on Mac or _Ctrl-K Ctrl-O_ on Windows.
3. Switch to the develop branch.
    + Using GUI interface:
      + Go to VS Code's _Source Control_ tab (under the file explorer). Click on the meatballs menu and select "Checkout to...".
        + Alternatively, at the bottom left corner of the VS Code window, there should be a "master" button that you can click on.
      + Select _origin/develop_. This will create a local copy of the develop branch.
    + Using command line interface:
      + Alternatively, using the menu bar open an integrated terminal using _Terminal > New Terminal_. Then you want to input

      ```
      git checkout origin/develop
      ```
4. Next, we want to open the app folder in terminal. Open an integrated terminal by using the menu bar and navigating to _Terminal > New Terminal_. You should currently be in the _GamifiedTaskManager_ folder. Change to the TaskApp directory using
  
  ```shell
  cd TaskApp
  ```
5. Since the filepath to _GamifiedTaskManager_ will be different on individual machines, each developer will need their own copy of the React libraries. While in _TaskApp_, you will want to run the command 
  ``` shell
  npm install
  ```

### Working on the Project
Until the team otherwise discusses, all changes to the project files should happen in the develop branch. This is because only working prototypes should live on the master branch. 

Once you have a local develop branch, you want to push to _"origin/develop"_. 