App = Ember.Application.create();

App.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

App.Show = DS.Model.extend({
	title: DS.attr('string'),
	choreographer: DS.attr('string'),
	date: DS.attr('date')
	location: DS.attr('string'),
	info: DS.attr('string'),
});

App.Show.FIXTURES = [{
	id: 1,
	title: "Northwest Something",
	choreographer: "some people",
	date: new Date('10-28-2013'),
	location: "OTB",
	info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
	id: 2,
	title: "CDT",
	choreographer: "some people",
	date: new Date('12-12-2013'),
	location: "BPH",
	info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
	id: 3,
	title: "Northwest Something",
	choreographer: "some people",
	date: new Date('11-28-2013'),
	location: "OTB",
	info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}]