#!/bin/bash
# helpful: http://stackoverflow.com/questions/8482843/git-commit-bash-script

git add .
read -p "Commit description: " desc
git commit -am "$desc"
git remote add origin git@github.com:kashJul2214/Currency_Cenverter-final-cidm4382_fall2016.git
git push -u origin master