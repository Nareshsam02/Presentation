// HEADER ANIMATIONS ARE DERIVEN FROM HERE

var App = App || {};
(function($, window, document, undefined) {
    this.headerAnim = function() {
        $(window).scroll(function() {
            var $this = $(this);
            if ($this.scrollTop() > 80) {
                $('header').addClass('is-hdr-md-anim');
            } else {
                $('header').removeClass('is-hdr-md-anim');
            }
        });
    };

    this.init = function() {
        this.headerAnim();
        return this;
    }
    return this.init();

})(jQuery, this, this.document);