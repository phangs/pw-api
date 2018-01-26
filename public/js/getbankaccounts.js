jQuery(document).ready(function() {
    console.log('Get Bank accounts loaded');

	jQuery('#tryme').click(function(){

		jQuery('#httpresult').text('');
		jQuery('#httprequest').text('');

		var ckey = '47693eb3-5b85-4980-b006-0f2a35c02b8a';
		var skey = '59dba91b-52d0-4589-8909-42d7f14a2a46';
		var salt = '46da9153c96c4d75b138d6722cd5f7e0';
		var requrl = 'http://stg.paywalo.com/api/Common/BankAccounts';
		var haccept = 'application/json';
		var hcontent = 'application/json';
		var hpform = 'WEB';

		var headerObj = {
            'Accept': haccept,
            'Content-Type': hcontent,
            'ClientKey': ckey,
            'SecretKey': skey,
            'X-PAYWALO-PLATFORM': hpform
            };

         jQuery.ajax({
            url: requrl,
            headers: headerObj,
            type: "GET",
            dataType: 'json',
            success: function(result) {
            	var prettyres = JSON.stringify(result.Messages.Errors, null, '\ ');
                jQuery('#httpresult').text(prettyres);
                jQuery.each(result.Data, function() {
                    // var prettyrequest = JSON.stringify(dataObj, null, '\ ');
                	var prettyheader = JSON.stringify(headerObj, null, '\ ');
                    jQuery('#httprequest').text(requrl + '\n' + 'HEADER' + '\n' + prettyheader);
                    var prettyerror = JSON.stringify(result.Messages.Errors, null, '\ ');
                    var prettymsg = JSON.stringify(result.Messages);
                    var prettyresult = JSON.stringify(result.Data, null, '\ ');
                    jQuery('#httpresult').text(result.Status + '\n' + '\n' + prettyresult + '\n' + prettymsg + '\n' + prettyerror);
                });
            }
        });

	});

});