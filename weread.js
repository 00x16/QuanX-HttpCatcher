var body = $response.body;
var url = $request.url;
//var obj = JSON.parse(body); //var its wrong let its right
let obj = JSON.parse(body);
if (url.indexOf('/pay/memberCardSummary') != -1) {
	obj.remainTime = 9999999999999;
	body = JSON.stringify(obj);
} 

$done({
	body
});
