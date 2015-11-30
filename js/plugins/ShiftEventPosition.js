/*:ja
 * @plugindesc イベントの表示位置を調整します
 * @author hiz
 *
 * @help
 * イベント メモ:
 *   <shift:x,y>                # 座標(x,y)だけ、イベントの表示位置をずらします。
 */


(function() {
	var game_event_initialize = Game_Event.prototype.initialize;
	Game_Event.prototype.initialize = function(mapId, eventId) {
	    game_event_initialize.call(this, mapId, eventId);
	    var ev = $dataMap.events[eventId];
	    this._shift_x = this._shift_y = 0;
	    if(typeof ev.meta.shift !== "undefined") {
	    	var shift = ev.meta.shift.split(",");
	    	if(shift.length >= 2) {
	    		this._shift_x = Number(shift[0]);
	    		this._shift_y = Number(shift[1]);
	    	}
	    }
	};

	var game_event_screenX = Game_Event.prototype.screenX;
	Game_Event.prototype.screenX = function() {
		
    	return game_event_screenX.call(this) + this._shift_x;
	};

	var game_event_screenY = Game_Event.prototype.screenY;
	Game_Event.prototype.screenY = function() {
	    return game_event_screenY.call(this) + this._shift_y;
	};

})();