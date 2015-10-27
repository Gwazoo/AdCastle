# Getting Started

1. Install Node
2. Install Ruby
3. Install Sass by running `sudo gem install sass`
4. Install MongoDB and run `mongod`
  * If it fails due to the file not existing, try running `mkdir -p /data/db`
  * If it fails due to permissions, try running `sudo chown -R `id -u` /data/db` or `sudo chown -R $USER /data/db`
5. Run `npm i -g yo grunt-cli bower generator-angular-fullstack`
6. Run `git clone git@github.com:Gwazoo/AdCastle.git`
7. `cd` into the root directory
8. Run `npm i`
9. Run `grunt serve`

# Client

Using Javascript ES6 and preprocessing with Babel
Frontend: HTML, Sass, Bootstrap, UI Bootstrap

# Server

Backend: uiRouter, Node, Express, Mongoose, MongoDB