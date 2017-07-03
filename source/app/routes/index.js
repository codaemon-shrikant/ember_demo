import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(){
		return RSVP.hash({
			clients:[
				{
					"client_name":"nike", 
					"client_logo":"assets/img/logos/logo-nike.svg"},
				{
					"client_name":"Microsoft", 
					"client_logo":"assets/img/logos/logo-ms.svg"},
				{
					"client_name":"github", "client_logo":"assets/img/logos/logo-github.svg"
				}
			],
			teamMembers:[
				{
					"name":"Riff Raff",
					"designation":"Founder",
					"avatar":"assets/img/team/riffraff.jpg",
					"about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter":"#",
					"facebook":"#",
					"linked_in":"#"
				},
				{
					"name":"2 Chainz",
					"designation":"Chief Technology Officer",
					"avatar":"assets/img/team/2chainz.jpeg",
					"about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter":"#",
					"facebook":"#",
					"linked_in":"#"
				},
				{
					"name":"Nene Leakes",
					"designation":"Director of Markerting",
					"avatar":"assets/img/team/nene.jpeg",
					"about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter":"#",
					"facebook":"#",
					"linked_in":"#"
				},
				{
					"name":"Miley Cirus",
					"designation":"Creative Director",
					"avatar":"assets/img/team/miley.jpg",
					"about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter":"#",
					"facebook":"#",
					"linked_in":"#"
				}
			],
			services:[
				{
					"name":"Unique Layouts",
					"icon":"fa-lightbulb-o",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Responsive",
					"icon":"fa-mobile",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Ajax Transitions",
					"icon":"fa-spinner",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"E-Commerce",
					"icon":"fa-shopping-bag",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Unlimited Portfolios",
					"icon":"fa-th",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				},
				{
					"name":"Powerful",
					"icon":"fa-bolt",
					"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}
			]
		});
	}
});
