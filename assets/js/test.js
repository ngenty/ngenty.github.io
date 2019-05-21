let form_submit = function() {
  form_el.addEventListener("submit", function(evt) {
    //event after form sent
    dataLayer.push({
      'event': 'myform',
      'eventCategory': 'user',
      'eventAction': 'contact form',
      'eventLabel': 'form sent',
      'eventValue': '1'
    })
  });
}
window.onload = form_submit;
