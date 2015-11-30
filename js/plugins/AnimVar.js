/*:ja
 * @plugindesc 指定変数のイベントIDに指定変数のアニメーションを起動
 * @author hiz
 * 
 * @help 
 * プラグインコマンド:
 *   Anim 1 2         # イベントID「変数1」にアニメーションID「変数2」のアニメーションを起動
 */

(function() {
	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === 'Anim') {
        	var eventId     = $gameVariables.value(args[0]);
			var animationId = $gameVariables.value(args[1]);
			$gameMap.event(eventId).requestAnimation(animationId);
        }
    };
})();	