var body = $response.body;
var url = $request.url;

if (url.indexOf('/pay/memberCardSummary') != -1) {
	var obj = JSON.parse(body);
	obj.remainTime=9999999999999;
	body = JSON.stringify(obj);
} 

$done({
	body
});
