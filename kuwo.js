var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';

if (url.indexOf(vip) != -1) {
	obj.data["luxAutoPayUser"] = "3";
	obj.data["isNewUser"] = "3";
	obj.data["isYearUser"] = "3";
	obj.data["vipmAutoPayUser"] = "3";
	obj.data["vipLuxuryExpire"] = "2345678900000";
	obj.data["vipmExpire"] = "2345678900000";
	obj.data["vipOverSeasExpire"] = "2345678900000";
	obj.data["vipExpire"] = "2345678900000";
	obj.data["vip3Expire"] = "2345678900000";
	body = JSON.stringify(obj);
}

$done({body});