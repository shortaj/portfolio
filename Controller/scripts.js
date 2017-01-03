'use strict';

//So they are looking for a constructor function to grab valuable data from previous/future projects to add to my portfolio. As far as I know, time spent, collaborators, and what was learned would be revelant information people would want to see... also the means of finding said project(url?)

function Project(name, timeSpent, collaborators, address) {
  this.name= name;
  this.timeSpent= timeSpent;
  this.collaborators= collaborators;
  this.address= address;
}
