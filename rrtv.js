var body = $response.body;
var url = $request.url;

if (url.indexOf('/ad/getAll') != -1) {
	var obj = JSON.parse(body);
	obj.data.adList = [];
	body = JSON.stringify(obj);
} else if (url.indexOf('/user/privilege/list') != -1) {
	var obj = JSON.parse(body);
	obj.data = [{
		"action": "play",
		"effectObject": "video",
		"id": 1,
		"function": "originalPainting",
		"func": "originalPainting",
		"endTime": 1667341767582,
		"description": "����ԭ��",
		"icon": "jiesuoyuanhua"
	}, {
		"action": "play",
		"effectObject": "video",
		"id": 4,
		"function": "noLimit",
		"func": "noLimit",
		"endTime": 1567341767582,
		"description": "����������",
		"icon": "kanjuwuxianzhi"
	}, {
		"action": "play",
		"effectObject": "growth",
		"id": 37,
		"function": "0.4",
		"func": "0.4",
		"endTime": 1667341767582,
		"description": "���羭��+40%",
		"icon": "jingyanzhijiacheng"
	}, {
		"action": "send",
		"effectObject": "danmu",
		"id": 43,
		"function": "superBarrageBlue",
		"func": "superBarrageBlue",
		"endTime": 1667341767582,
		"description": "������Ļ",
		"icon": "chaojidanmu"
	}, {
		"action": "play",
		"effectObject": "video",
		"id": 23,
		"function": "noAd",
		"func": "noAd",
		"endTime": 1667341767582,
		"description": "�����޹��",
		"icon": "kanjuwuguanggao"
	}];

}else if(url.indexOf('/rrtv-video/v4plus/season/detail') != -1){
	var obj = JSON.parse(body);

	obj.data['season']['feeMode'] = 'restriction';
}else if(url.indexOf('/watch/v4/priority_video_quality/get_priority_video_quality_config') != -1){
	var obj = JSON.parse(body);

	obj.data ="sortedItems":[{"qualityDescription":"����","qualityCode":"SD","canPlay":true,"canShowVip":false,"initialQuality":true},{"qualityDescription":"����","qualityCode":"HD","canPlay":true,"canShowVip":false,"initialQuality":false},{"qualityDescription":"ԭ��","qualityCode":"OD","canPlay":true,"canShowVip":false,"initialQuality":false},{"qualityDescription":"AIԭ��","qualityCode":"AI_OD","canPlay":true,"canShowVip":false,"initialQuality":false}];
}else if(url.indexOf('/watch/v4/get_movie_play_info') != -1){
	var obj = JSON.parse(body);

	obj.data['m3u8']['currentQuality'] = 'OD';
}


body = JSON.stringify(obj);

$done({
	body
});