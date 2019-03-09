/* Map Settings */
$('.mbr-map')
  .click(function(){
    $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
    $(this).find('iframe').removeClass('clicked')});

/* Google Analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-32824327-1', 'auto');
ga('send', 'pageview');

/* StatCounter */
var sc_project=8050748; 
var sc_invisible=1; 
var sc_security="4ad299df";
var sc_script=document.createElement('script');
sc_script.setAttribute('src', '//statcounter.com/counter/counter.js');
document.body.appendChild(sc_script);

/* AddThis */
setTimeout(function(){
  var addthisScript = document.createElement('script');
  addthisScript.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5848053451695054');
  document.body.appendChild(addthisScript);
},1500);