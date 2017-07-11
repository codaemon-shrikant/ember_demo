import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations,{
	showErrors : false,
	validations: {
		name:{
			presence: { message: 'Please enter your name' }
		},
		email:{
			presence: { message: 'Please enter Email' },
			format: { with: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, allowBlank: true, message: 'Please enter valid email address'  }
		},
		phone:{
			presence: { message: 'Please enter Phone number' },
			format: { with: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ , allowBlank: true, message: 'Please enter valid 10 digit phone number'} 
		},
		description:{
			presence: { message: 'Please enter description' }
		}
	},
	actions: {
		submitContact(){
			this.validate().then(()=>{
				//write submit api call here 
				this.set('isSubmitted', true);
			}).catch(()=>{
				this.set("showErrors",true)
				//console.log(this.get("errors"));	
			})
		}		
	}
});
