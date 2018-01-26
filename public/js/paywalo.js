jQuery(document).ready(function () {

    // jQuery('#pages').load('pages/about.html');


    jQuery('#navintro').click(function () {
        jQuery('#article').load('content/intro.html');
    })

    jQuery('#navsec').click(function () {
        jQuery('#article').load('content/security.html');
    })

    jQuery('#navchklist').click(function () {
        jQuery('#article').load('content/checklist.html');
    })

    jQuery('#navhttp').click(function () {
        jQuery('#article').load('content/httpheader.html');
    })

    jQuery('#navhilevel').click(function () {
        jQuery('#article').load('content/hilevel.html');
    })

    jQuery('#navpmethod').click(function () {
        jQuery('#article').load('content/getpayment.html');
    })

    jQuery('#navbankaccounts').click(function () {
        jQuery('#article').load('content/getbankaccounts.html');
    })

    jQuery('#navbanksall').click(function () {
        jQuery('#article').load('content/getbanksall.html');
    })

    jQuery('#navbanksdep').click(function () {
        jQuery('#article').load('content/getbanksdep.html');
    })

    jQuery('#navbankswithd').click(function () {
        jQuery('#article').load('content/getbankswithd.html');
    })

    jQuery('#navonlinebanks').click(function () {
        jQuery('#article').load('content/getonlinebanks.html');
    })

    jQuery('#navchkdeposit').click(function () {
        jQuery('#article').load('content/chkdeposit.html');
    })

    jQuery('#navchkwithdrawal').click(function () {
        jQuery('#article').load('content/chkwithdrawal.html');
    })

});
