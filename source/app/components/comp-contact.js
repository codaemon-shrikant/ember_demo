import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitContact(){
			//write submit api call here 
			this.set('isSubmitted', true);
		}
	}
});
