#Setting up React Native on Ubuntu

- How to run
1- run genymotion then initiate the device
2- run android studio
3- run react-native run-android
4- on the project folder run: npm start

You should see your app on the virtual device...

Just build it up... =D

This tutorial was super helpful to see how it works:
https://www.youtube.com/watch?v=OZ5nCNOzflM

This one has all the dependencies and commands to install them:

https://www.youtube.com/watch?v=0xKrHZNudEQ


Installing Android Studio + dependencies:

https://facebook.github.io/react-native/releases/0.21/docs/getting-started-on-linux.html

https://facebook.github.io/react-native/releases/0.21/docs/android-setup.html#content

Python

https://askubuntu.com/questions/101591/how-do-i-install-the-latest-python-2-7-x-or-3-x-on-ubuntu

Java + eclipse

http://ubuntuhandbook.org/index.php/2016/01/how-to-install-the-latest-eclipse-in-ubuntu-16-04-15-10/

To run Android Studio:

https://developer.android.com/studio/install.html

cd Downloads/android-studio/bin
./studio.sh


Developer React Native

install react native on ubuntu for android

Step1: install nodejs
 + sudo apt-get update
 + sudo apt-get install nodejs
 + sudo apt-get install npm
 + sudo ln -s /usr/bin/nodejs /usr/bin/node

Step 2: Installing Watchman - need install git
 + sudo apt-get install python-dev
 + sudo apt-get install automake
 + sudo apt-get install autoconf
 + git clone https://github.com/facebook/watchman.git
 + cd watchman
 + git checkout v4.5.0  # the latest stable release
 + ./autogen.sh
 + ./configure
 + sudo su --- enter pass switch to root
 + make
 + sudo make install

Step 3: install react native - open terminal via root
 + npm install -g react-native-cli

Step 4: install flow
 + sudo npm install -g flow-bin


finish!


Test - -- init project 
 + react-native init ProjectName - --pending finish
 +open genymotion --- add sdk to genymotion --- start emulator
 + run project for android - -- react-native run-android   *the first run, pendding download gradle* .......

 fix error: SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.

 --- create file local.properties in android folder project, and add 2 line: 
  sdk.dir = --SDK path--
  ANDROID_HOME = --SDK path--
  save and run again!

 ---start npm

ok!  finish
Thanks!


