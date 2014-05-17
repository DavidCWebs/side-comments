var expect = chai.expect;
var SideComments = require('side-comments');
var sideComments;
var fixturesHTML = $('#fixtures').html();

function setupSideComments() {
	if (sideComments) {
		sideComments.destroy();
		sideComments = null;
	}
	$('#fixtures').html(fixturesHTML);
	sideComments = new SideComments('#commentable-container');
}
 
describe("SideComments", function() {

	beforeEach(function( done ) {
		setupSideComments();
		done();
	});

	after(function( done ) {
		sideComments.destroy();
		sideComments = null;
		$('#fixtures').html(fixturesHTML);
		done();
	});
  
  describe("Constructor", function() {
    
    it("should have a $el", function() {
      expect(sideComments.$el).to.not.be.empty;
    });

    it("should have a $body", function() {
      expect(sideComments.$body).to.not.be.empty;
    });

    it("should create the right number of Section objects", function() {
    	expect(sideComments.sections).to.have.length.of(3);
    });

  });

  describe("Display interactions", function() {

  	it("should have the comment sections hidden at start", function() {
  		expect(sideComments.commentsAreVisible()).to.be.false;
  	});

  	it("should know if the comment sections are hidden or not", function() {
  		$('body').addClass('side-comments-open');
  		expect(sideComments.commentsAreVisible()).to.be.true;
  	});

  	it("should toggle the display of the comments when a marker is clicked", function() {
  		$('.side-comment').first().find('.marker').trigger('click');
  		expect(sideComments.commentsAreVisible()).to.be.true;
  	});

  	it("should toggle the display of the comments when a marker is clicked", function() {
  		$('.side-comment').first().find('.marker').trigger('click');
  		expect(sideComments.commentsAreVisible()).to.be.true;
  	});

  	it("should make comments visible when a marker is clicked", function() {
  		$('.side-comment').first().find('.marker').trigger('click');
  		expect(sideComments.commentsAreVisible()).to.be.true;
  	});

  	it("should display the comments when a marker is clicked", function() {
  		var $section = $('.side-comment').first();
  		$section.find('.marker').trigger('click');
  		expect($section.hasClass('active')).to.be.true;
  	});

  	it("should hide the previously active section when a different marker is clicked", function() {
  		var $section = $('.side-comment').first();
  		$section.find('.marker').trigger('click');

  		var $nextSection = $('.side-comment').eq(1);
  		$nextSection.find('.marker').trigger('click');

  		expect($section.hasClass('active')).to.be.false;
  	});

  	it("should select the new section when a different marker is clicked", function() {
  		var $section = $('.side-comment').first();
  		$section.find('.marker').trigger('click');

  		var $nextSection = $('.side-comment').eq(1);
  		$nextSection.find('.marker').trigger('click');

  		expect($nextSection.hasClass('active')).to.be.true;
  	});

  	it("should hide the comments when the active section is clicked", function() {
  		var $section = $('.side-comment').first();
  		$section.find('.marker').trigger('click');
  		$section.find('.marker').trigger('click');

  		expect($section.hasClass('active')).to.be.false;
  		expect(sideComments.commentsAreVisible()).to.be.false;
  	});

  });

});