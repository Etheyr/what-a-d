'use strict';

(function(){

	var date = {

		jour : null,
		mois : null,
		annee : null,
		momentFR : null,
		momentLL : null,

		init: function(){
			this.listeners();
		},
		listeners: function(){

			$('#verifier').on('click', this.verifier.bind(this));
			$('#buttonOverlay').on('click')
		},
		verifier: function(){

			$('#buttonOverlay').hide();
			this.jour =	$('#jour').val();

			if (this.jour > 31){

				$('.error').show();
				$('#jour').css('border' , '2px solid #ff7473');

			}else {
				this.moduleMoment();

				$('#spanOverlay').text(this.momentLL);
				$('body').css('background' , '#9055A2')
				$('#jour').hide();
				$('#mois').hide();
				$('#annee').hide();
				$('#verifier').hide();
				$('#spanJour').hide();
				$('#spanMois').hide();
				$('#spanAnnee').hide();
				$('.error').hide();
			}

			this.mois = $('#mois').val();
			this.annee = $('#annee').val();
			console.log(this.jour);
			console.log(this.mois);
			console.log(this.annee);

		},
		moduleMoment: function() {

			this.momentFR = moment.locale('FR');
			this.momentLL =  moment({day:this.jour , month:this.mois , year:this.annee}).format('dddd');
			console.log(this.momentLL);
		}
	};
	date.init();
})();
