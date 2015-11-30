/*:ja
 * @plugindesc イベントの表示位置を特定のイベントに追随させます（すり抜け推奨）
 * @author hiz
 *
 * @help
 * イベントの表示位置を特定のイベントに追随させます。
 * 判定位置は変わりません。すり抜け推奨。
 * イベント メモ:
 *   <follow:id,x,y>                # 指定したidのイベントから座標(x,y)だけずらした位置にイベントを表示します。
 */


(function() {
	// イベントのメモ欄から表示位置のシフト座標を設定
	var game_event_initialize = Game_Event.prototype.initialize;
	Game_Event.prototype.initialize = function(mapId, eventId) {
	    game_event_initialize.call(this, mapId, eventId);
	    var ev = $dataMap.events[eventId];
	    this._follow_id = -1;
	    this._follow_x = this._follow_y = 0;
	    if(typeof ev.meta.follow !== "undefined") {
	    	var follow = ev.meta.follow.split(",");
	    	if(follow.length >= 3) {
	    		this._follow_id = parseInt(follow[0]);
	    		this._follow_x  = parseInt(follow[1]);
	    		this._follow_y  = parseInt(follow[2]);
	    	}
	    }
	};
	
	var game_event_screenX = Game_Event.prototype.screenX;
	Game_Event.prototype.screenX = function() {
		if(this._follow_id >= 0) {
			var ev = $gameMap.event(this._follow_id);
			var dx = 0;
			this._direction = ev._direction;
			if(     ev._direction == 2) dx = + this._follow_x;
			else if(ev._direction == 4) dx = - this._follow_y;
			else if(ev._direction == 6) dx = + this._follow_y;
			else if(ev._direction == 8) dx = - this._follow_x;
			return ev.screenX() + dx;
		}
    	return game_event_screenX.call(this);
	};

	var game_event_screenY = Game_Event.prototype.screenY;
	Game_Event.prototype.screenY = function() {
	    if(this._follow_id >= 0) {
	    	var ev = $gameMap.event(this._follow_id);
	    	var dy = 0;
	    	this._direction = ev._direction;
	    	if(     ev._direction == 2) dy = + this._follow_y;
			else if(ev._direction == 4) dy = + this._follow_x;
			else if(ev._direction == 6) dy = - this._follow_x;
			else if(ev._direction == 8) dy = - this._follow_y;
			return ev.screenY() + dy;
		}
    	return game_event_screenY.call(this);
	};

})();