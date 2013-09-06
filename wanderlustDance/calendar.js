App = Ember.Application.create({
});

App.Router.map(function() {
	this.resource("index", {path:'/'}),
	this.resource("gallery"),
	this.resource("contact"),
	this.resource("shows", function() {
		this.resource("show", {path: '/:show_id' })
	});
});

App.ShowsRoute = Ember.Route.extend({
	model: function() {
		return App.Show.find();
	},
	redirect: function() {
		this.transitionTo('/shows/1');
	}
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return App.blogPost.find();
	}
});


Ember.Handlebars.registerBoundHelper('dateHelper', function(date) {
	return moment(date).format("MMM Do YYYY");
});

Ember.Handlebars.registerBoundHelper('mapMaker', function(address, placeName) {
	var addressFix = placeName.replace(",","").replace(/ /g,"+").concat("+").concat(address.replace(",","").replace(/ /g,"+"));
	var result = '<a href="https://maps.google.com/?q=' + addressFix + '" target="_blank"><img class="img-responsive" src="http://maps.googleapis.com/maps/api/staticmap?size=600x350&maptype=roadmap&markers=color:red%7C'+ addressFix +'&sensor=false&key=AIzaSyBqSFTqQMR55VSv0ARCB7b_4tzP74mQ42U&zoom=14"/></a>';
	return new Handlebars.SafeString(result);
});

App.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

App.Show = DS.Model.extend({
	title: DS.attr('string'),
	choreographer: DS.attr('string'),
	date: DS.attr('date'),
	placeName: DS.attr('string'),
	address: DS.attr('string'),
	info: DS.attr('string'),
	//isJoShow: DS.attr('boolean'),
});

App.blogPost = DS.Model.extend({
	title: DS.attr('string'),
	submitter: DS.attr('string'),
	postedTime: DS.attr('date'),
	content: DS.attr('string'),
});

App.blogPost.FIXTURES = [{
	id: 1,
	title: "first post",
	submitter: "ryan juve",
	postedTime: new Date('September 4, 2013'),
	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe"
}, {
	id: 2,
	title: "second post",
	submitter: "jordan colvard",
	postedTime: new Date('September 1, 2013'),
	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe"
}]

App.Show.FIXTURES = [{
	id: 1,
	title: "Northwest Something",
	choreographer: "some people",
	date: new Date('October 28, 2013'),
	placeName: "Velocity Dance Center",
	address: "1621 12th Ave, Seattle WA 98102",
	info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	//isJoShow: true,
}, {
	id: 2,
	title: "CDT",
	choreographer: "some people",
	date: new Date('October 31, 2014'),
	placeName: "On The Boards",
	address: "100 West Roy Street, Seattle, WA 98119",
	info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	//isJoShow: false,
}, {
	id: 3,
	title: "Another Show",
	choreographer: "some people",
	date: new Date('November 28, 2013'),
	placeName: "Velocity Dance Center",
	address: "1621 12th Ave, Seattle WA 98102",	
	info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	//isJoShow: false,
}]

function  jumboFade() {
	setInterval(function(){
		$("#fade1").delay(3000).fadeTo(3000, 0).delay(6000).fadeTo(3000,1).delay(3000);
		$("#fade2").delay(3000).fadeTo(3000, 1).delay(3000).fadeTo(3000,0).delay(6000);
		$("#fade3").delay(9000).fadeTo(3000, 1).delay(3000).fadeTo(3000,0);
	},3000);
}


$(document).ready(function(){
	jumboFade();
});