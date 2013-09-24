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
	var result = '<div class="iframe-rwd"><iframe width="700" height="400" frameborder="10" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;z=14&amp;hl=en&amp;geocode=&amp;q=' + addressFix + '&amp;aq=&amp;t=m&amp;ie=UTF8&amp;output=embed"></iframe></div><br/><small><a href="https://maps.google.com/maps?f=q&amp;z=14&amp;hl=en&amp;geocode=&amp;q='+ addressFix +'&amp;aq=&amp;t=m&amp;ie=UTF8&amp;output=html" target="_blank" style="color:#0000FF;text-align:left">View Larger Map</a></small>';
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
	$("#fade1").delay(3000).fadeTo(3000, 0).delay(9000).fadeTo(3000,1).delay(3000);
	$("#fade2").delay(3000).fadeTo(3000, 1).delay(3000).fadeTo(3000,0).delay(9000);
	$("#fade3").delay(9000).fadeTo(3000, 1).delay(3000).fadeTo(3000,0).delay(3000);
}


$(document).ready(function(){
	setInterval(function(){jumboFade()},21000);
});