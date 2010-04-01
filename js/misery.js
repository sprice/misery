Drupal.behaviors.misery = function() {
  // Check that jQuery crash plugin exists.
  if(jQuery.crash) {
    $.crash();
  }
}