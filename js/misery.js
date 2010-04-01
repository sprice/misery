Drupal.behaviors.misery = function() {
  if(jQuery.crash) {
    $.crash();
  }
}