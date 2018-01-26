jQuery(document).ready(function() {
  
  // get box count
  var count = 0;
  var checked = 0;
  jQuery("#myprogress").attr('aria-valuenow', 0);
  function countBoxes() { 
    count = jQuery("input[type='checkbox']").length;
    // console.log(count);
  }
  
  countBoxes();
    jQuery("input:checkbox").click(countBoxes);
    // console.log("all boexes:"+count);
  
  // count checks
  
  function countChecked() {
    checked = jQuery("input:checked").length;
    // console.log("checked="+checked);

    var percentage = parseInt(((checked / count) * 100),10);
    // console.log(percentage);
    jQuery("#myprogress").attr('value', percentage);
    jQuery("#pblabel").text(percentage + "%");
  }
  
  countChecked();
  jQuery(":checkbox").click(countChecked);
});