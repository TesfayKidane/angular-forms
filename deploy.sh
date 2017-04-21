#!/bin/bash
ng build --prod --base-href="https://tesfaykidane.github.io/angular-forms/"
git add .
git commit -m "form update"
git subtree push --prefix dist origin gh-pages
