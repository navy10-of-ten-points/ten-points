### Developer Documentation

---------------------------------------------------------------------

If you want to make some development, or if you want to fix some bugs, you can join Card News development as a developer. This document will help you know how to join us as a developer and understand the codes.

#### Summary

* [General](#general)
* [Environments](#environments)
   * [languages](#languages)
   * [code style](#code-style)
   * [github](#github)
   * [license](#license)
* [Steps](#steps)
   * [Installation](#installation)
   * [Fork & Clone](#fork--clone)
   * [Pull & Make Changes](#pull--make-changes)
   * [Commit & Push](#commit--push)
   * [Create Pull Request](#create-pull-request)
* [Code structure](#code-structure)
   * [assets](#assets)
   * [sass](#sass)
   * [main](#main)



#### General 

------------------------------------------

- **Author**   : Minsuk Kang
- **Version**  : 1.0.0

#### Environments

--------------------------------------------

* ##### languages
  We are using HTML5 and we recommend you to use it or the program may crush.

* ##### code style
  The general code style of HTML are listed [here](https://google.github.io/styleguide/htmlcssguide.html). 

* ##### github
  You can join our development through our [github repository](https://sohn1029.github.io/ten-points/). 

* ##### license
  Our program runs under CCA 3.0 license.

* For more information, check [specifications](https://github.com/navy10-of-ten-points/ten-points/blob/master/specifications.md).

  ​


#### Steps

-----------------------------------------------------

##### Installation 

​	First, install github desktop on your computer. Although it is not necessary, we still recommend you, especially for people who never used github before, to use it because it makes your pull & push jobs much more convenient. You can download it frome [here](https://desktop.github.com/).

##### Fork & Clone

​	Go to our [github repository](https://sohn1029.github.io/ten-points/) and you can find a fork button on the upper right corner. Click it and wait until it is forked to your repository. Then go to your forked repository. In the ```<>code```, you may find a green button with ```Clone or download``` written on it. Click it and click open in desktop if you already have downloaded the github desktop. The desktop app will pop up and clone automatically.

##### Pull & Make Changes 

​	Now you can make changes to the files. Go to your cloned folder and do your own work. While working, don't forget to pull. The more often you pull, the safer it becomes. At the top of the desktop app, you can find ```fetch origin``` or ```pull origin``` button, and click it to pull or ckeck if there are any changes made by others. You can save your work in the cloned folder. 

##### Commit & Push

​	Always remember to pull(fetch) before you commit. After no crushes have been found, your ```pull origin``` button must have changed to ```push to origin```. After write down your summary and description at the button left corner, you can click the ```push to origin``` to push. 

##### Create Pull Request

​	Now, go to your repository on github website and check if your changes have been done correctly. If there are samll issues, you can also fix them directly on the website. After it's done, go to ```Pull request``` and create a pull request. Your job ends here. If your changes are found suitable, then your changes will be merged to master by us.


#### Code structure

-----------------------

```html
ten-points
├── assets
├── cardnews
├── category
├── images
├── main
├── CardNews
├── index
├── LICENSE
├── manual
├── README
├── specifications
└── developer documentation
```

| File/Folder         | Description                              |
| ------------------- | ---------------------------------------- |
| **assets**          | Contains .css files and .javascript files |
| **cardnews**        | Contains folder per category which contain images of cardnews and viewer.html |
| **category**        | Contains html file per category          |
| **images**          | Contains the images which is not associated with cardnews |
| **main**            | Contains html files of navigator bar of main page |
| **CardNews**        | Presentation ppt of team navy-10         |
| **index**           | The main page. It is not directly associated with cardnews. Is is the page to explain developer's information and license etc. |
| **LICENSE**         | It is the text file which explains the most important license named 'cc3.0 unported'. |
| **other documents** | Including README, manual, specifications, developer documentation |



##### assets

```html
├── assets
    ├── css
    ├── fonts
    ├── js
    └── sass
```
| Folder | Description                            |
| ------ | -------------------------------------- |
| css    | Contains codes that featuring web page |
| fonts  | Contains fonts used in cardnews        |
| js     | Contains features of web page          |
| sass   | Contains all main views                |



##### sass

```html
├── sass
    ├── base
    ├── components
    ├── layout
    ├── libs
	...
```
| Folder     | Description                              |
| ---------- | ---------------------------------------- |
| base       | Contains bases of the web page           |
| components | Contains all basic features              |
| layout     | Contains all partial views included in main views |
| libs       | Contains libraries used in sass          |



##### main

```html
├── cardnews
	...
	...
	└── main
```

| Folder        | Description                              |
| ------------- | ---------------------------------------- |
| cardnews      | Contains folder per category which contain images of cardnews and viewer.html |
| cardnews/main | Main function codes                      |
