jQuery(document).ready(function() {

	jQuery('#tryme').click(function(){

		// var nOrderDate = new Date().toISOString().substr(0, 19);
        var nOrderDate = new Date().toISOString().substr(0, 19);
        jQuery('#reqOrderDate').val(nOrderDate);
        jQuery('#httpresult').text('');
		jQuery('#httprequest').text('');

		var ckey = '47693eb3-5b85-4980-b006-0f2a35c02b8a';
		var skey = '59dba91b-52d0-4589-8909-42d7f14a2a46';
		var salt = '46da9153c96c4d75b138d6722cd5f7e0';
		var requrl = 'http://stg.paywalo.com/api/Payment/Deposit';
		var haccept = 'application/json';
		var hcontent = 'application/json';
		var hpform = 'WEB';

        var dAmount = jQuery('#reqAmount').val();
        var dCurrency = String(jQuery('#reqCurrency').val());
        var dOrderDate = String(jQuery('#reqOrderDate').val());
        var dOrderNumber = String(jQuery('#reqOrderNumber').val());
        var dBankId = String(jQuery('#reqBankId').val());
        var dCallbackUrl = String(jQuery('#reqCallbackUrl').val());
        var dNotes = String(jQuery('#reqNotes').val());
        var dsign = String(jQuery('#reqSign').val());

		var headerObj = {
            'Accept': haccept,
            'Content-Type': hcontent,
            'ClientKey': ckey,
            'SecretKey': skey,
            'X-PAYWALO-PLATFORM': hpform
            };

        var dataObj = {
                'Amount': dAmount,
                'OrderDate': dOrderDate,
                'OrderNumber': dOrderNumber,
                'BankId': dBankId,
                'Currency': dCurrency,
                'CallbackUrl': dCallbackUrl,
                'Notes': dNotes,
                'Sign': dsign
            }

         jQuery.ajax({
            url: requrl,
            headers: headerObj,
            type: "POST",
            dataType: 'json',
            data: JSON.stringify(dataObj),
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