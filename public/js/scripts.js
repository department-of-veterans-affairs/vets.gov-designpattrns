// this is not ideal but allows the accordions to work without import USWDS javascript, which conflicts with PatternLab's javascript and styles.

$(document).ready(function() {
  $('.usa-accordion button[aria-controls=collapsible-0]').click(function() {
    if($(this).attr('aria-expanded') === 'false') {
      $(this).attr('aria-expanded', 'true')
      $('#collapsible-0').attr('aria-hidden', 'false')
    } else {
      $(this).attr('aria-expanded', 'false')
      $('#collapsible-0').attr('aria-hidden', 'true')
    }
  })
})
