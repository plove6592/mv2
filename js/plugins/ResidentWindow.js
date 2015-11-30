//=============================================================================
// 【常駐ウィンドウ】　Version: 1.10
//
// ※ 当ブログの常駐所持金ウィンドウ（ResidentGoldWindow.js）はこのスクリプトに統合されました。
// 　 既に使用されている方はそのプラグインを消去した上で本プラグインを導入して下さい。
//
// ここからリスポーン: http://respawnfromhere.blog.fc2.com/
// Twitter: https://twitter.com/ibakip
//
//=============================================================================

//=============================================================================
 /*:
 * @plugindesc マップに常駐するステータス＋所持金ウィンドウを生成します。
 * @author ResidentWindow
 *
 * //---↓全体管理-------------------------------------------
 *
 * @param FaceWindow_ON
 * @desc 顔グラウィンドウを使用する場合は true を指定して下さい。
 * （※使用しない場合は false か空文字を指定）
 * @default true
 *
 * @param StatusWindow_ON
 * @desc ステータスウィンドウを使用する場合は true を指定して下さい。
 * （※使用しない場合は false か空文字を指定）
 * @default true
 *
 * @param GoldWindow_ON
 * @desc 所持金ウィンドウを使用する場合は true を指定して下さい。
 * （※使用しない場合は false か空文字を指定）
 * @default true
 *
 * //-----------------------------------------------------
 *
 * //---↓顔グラウィンドウ-------------------------------------
 *
 * @param FaceWindow_x
 * @desc 顔グラを表示するx座標です。
 * @default 10
 *
 * @param FaceWindow_y
 * @desc 顔グラを表示するy座標です。
 * @default 10
 *
 * @param FaceWindow_type
 * @desc 顔グラウィンドウのタイプを選択します。
 * 0：通常 1：黒背景 2:透明
 * @default 2
 *
 * @param FaceFrame_ON
 * @desc 顔グラをフレーム画像で装飾する場合はtrueを指定して下さい。
 * （※使用しない場合は false か空文字を指定）
 * @default true
 *
 * //--------------------------------------------------------
 *
 * //---↓ステータスウィンドウ-------------------------------------
 *
 * @param StatusWindow_x
 * @desc ステータスを表示するx座標です。
 * @default 196
 *
 * @param StatusWindow_y
 * @desc ステータスを表示するy座標です。
 * @default 20
 *
 * @param StatusWindow_type
 * @desc ステータスウィンドウのタイプを選択します。
 * 0：通常 1：黒背景 2:透明
 * @default 2
 *
 * @param GaugeFrame_ON
 * @desc HP等のゲージにフレーム画像を使う場合はtrueを指定して下さい。
 * （※使用しない場合は false か空文字を指定）
 * @default true
 *
 * @param StatusWindow_PaddingHeight
 * @desc 各ステータスゲージの間隔を指定します。
 * 値を大きくするほどゲージが離れます。
 * @default 10
 *
 * @param TP_Gauge_ON
 * @desc TPゲージを描画する場合は true を指定して下さい。
 * （※使用しない場合は false か空文字を指定）
 * @default true
 *
 * //--------------------------------------------------------
 *
 * //---↓所持金ウィンドウ-------------------------------------
 *
 * @param GoldWindow_x
 * @desc 所持金ウィンドウを表示するx座標です。
 * @default 576
 *
 * @param GoldWindow_y
 * @desc 所持金ウィンドウを表示するy座標です。
 * @default 550
 *
 * @param GoldWindow_type
 * @desc 所持金ウィンドウのタイプを選択します。
 * 0：通常 1：黒背景 2:透明 3:画像
 * @default 3
 *
 * @param GoldWindow_width
 * @desc 所持金ウィンドウの横幅です。
 * Gold_Window_typeで 3 を指定した場合は無視されます。
 * @default 240
 *
 * @param GoldWindow_height
 * @desc 所持金ウィンドウの縦幅です。
 * Gold_Window_typeで 3 を指定した場合は無視されます。
 * @default 60
 *
 * @param GoldWindow_IconNumber
 * @desc 所持金ウィンドウに描画するアイコンを選択します。
 * 0 を指定するとアイコンは使わず単位を描画します。
 * @default 314
 *
 * @param GoldWindow_PaddingWidth
 * @desc 所持金ウィンドウ内の横方向の余白を調整します。
 * 値を大きくするほど描画内容が内側に寄ります。
 * @default 10
 *
 * //--------------------------------------------------------
 *
 * @help
 *
 * //=============================================================================
 * // 【常駐ウィンドウ】　Version: 1.10
 * //
 * // ※ 当ブログの常駐所持金ウィンドウ（ResidentGoldWindow.js）は
 * //   このスクリプトに統合されました。
 * //   既に使用されている方はそのプラグインを消去した上で
 * //   本プラグインを導入して下さい。
 * //
 * // ここからリスポーン: http://respawnfromhere.blog.fc2.com/
 * // Twitter: https://twitter.com/ibakip
 * //
 * //=============================================================================
 *
 * このプラグインはマップに常駐する顔グラウィンドウ、ステータスウィンドウ、
 * 所持金ウィンドウの３つを生成します。
 *　
 * 【プラグインコマンド】
 *  ResidentWindow Show : 常駐ウィンドウを表示します。
 *  ResidentWindow Hide : 常駐ウィンドウを非表示にします。
 *
 * 【パラメータ】
 * 各ウィンドウの使用
 *  ・ FaceWindow_ON
 *  ・ StatusWindow_ON
 *  ・ GoldWindow_ON
 *     それぞれ true を指定すると使用、 false か空文字を指定すると未使用。
 *
 * 各ウィンドウのウィンドウタイプ変更
 *  ・ FaceWindow_type
 *  ・ StatusWindow_type
 *  ・ GoldWindow_type
 *     0：通常  1：黒背景  2:透明  3:画像(所持金ウィンドウのみ)
 *     3 を選択する場合、使用する画像をimg/picturesフォルダに入れて下さい。
 *
 * 顔グラウィンドウ表示位置の変更
 *  ・ FaceWindow_x
 *  ・ FaceWindow_y
 *
 * ステータスウィンドウ表示位置の変更
 *  ・ StatusWindow_x
 *  ・ StatusWindow_y
 *
 * 所持金ウィンドウ表示位置の変更
 *  ・ GoldWindow_x
 *  ・ GoldWindow_y
 *
 * 顔グラをフレーム画像で装飾するかを指定
 *  ・ FaceFrame_ON
 *     true を指定すると使用、 false か空文字を指定すると未使用。
 *     規格は同梱されている物に従って下さい。
 *     ※ trueにすると、FaceWindow_type の指定は無視されます。
 *
 * ステータスウィンドウのゲージ間隔の変更
 *  ・ StatusWindow_PaddingHeight
 *
 * HPゲージ等にフレーム画像を適用するかを指定
 *  ・ GaugeFrame_ON
 *     true を指定すると使用、 false か空文字を指定すると未使用。
 *     規格は同梱されている物に従って下さい。
 *
 * ステータスウィンドウにTPゲージを描画するかを指定
 *  ・ TP_Gauge_ON
 *     true を指定すると使用、 false か空文字を指定すると未使用。
 *
 * 所持金ウィンドウの幅の変更
 *  ・ GoldWindow_width
 *  ・ GoldWindow_height
 *     GoldWindow_typeで 3 を指定した場合、この値は無視されます。
 *     （画像サイズに合わせて自動でウィンドウ幅が決定されます。）
 *
 * 所持金ウィンドウに描画するアイコン画像の変更
 *  ・ GoldWindow_IconNumber
 *     0 を指定するとアイコンは使わずお金の単位を描画します。
 *
 * 所持金ウィンドウ内の横方向の余白調整
 *  ・ GoldWindw_PaddingWidth
 *     値が大きいほど描画内容が内側に寄ります。
 *
 *
 */
 //=============================================================================


var Imported = Imported || {};
Imported.ResidentWindow = {};

(function(){

var inVal = Imported.ResidentWindow;
inVal.WinON = true;
inVal.last_WinState = true;

// ---プラグインパラメータの取得-----------------------------------------------------
 var Parameters = PluginManager.parameters('ResidentWindow');
 var RFW_ON = !Parameters['FaceWindow_ON'].match(/^\s*(false)?\s*$/i);
 var RSW_ON = !Parameters['StatusWindow_ON'].match(/^\s*(false)?\s*$/i);
 var RGW_ON = !Parameters['GoldWindow_ON'].match(/^\s*(false)\s*$/i);
 var RFW_x  = Math.floor(Number(Parameters['FaceWindow_x'])) || 0;
 var RFW_y  = Math.floor(Number(Parameters['FaceWindow_y'])) || 0;
 var RSW_x  = Math.floor(Number(Parameters['StatusWindow_x'])) || 0;
 var RSW_y  = Math.floor(Number(Parameters['StatusWindow_y'])) || 0;
 var RSW_paddingHeight = Math.floor(Number(Parameters['StatusWindow_PaddingHeight'])) || 0;
 var RSW_TPGaugeON = !Parameters['TP_Gauge_ON'].match(/^\s*(false)\s*$/i);
 var RSW_GaugeFrameON = !Parameters['GaugeFrame_ON'].match(/^\s*(false)\s*$/i);
 var RFW_FrameON = !Parameters['FaceFrame_ON'].match(/^\s*(false)\s*$/i);
 var RGW_x  = Math.floor(Number(Parameters['GoldWindow_x'])) || 0;
 var RGW_y  = Math.floor(Number(Parameters['GoldWindow_y'])) || 0;
 var RFW_type   = Math.floor(Number(Parameters['FaceWindow_type'])) || 0;
 var RSW_type   = Math.floor(Number(Parameters['StatusWindow_type'])) || 0;
 var RGW_type   = Math.floor(Number(Parameters['GoldWindow_type'])) || 0;
 var RGW_width  = Math.floor(Number(Parameters['GoldWindow_width'])) || 0;
 var RGW_height = Math.floor(Number(Parameters['GoldWindow_height'])) || 0;
 var RGW_icon   = Math.floor(Number(Parameters['GoldWindow_IconNumber'])) || 0;
 var RGW_paddingWidth = Math.floor(Number(Parameters['GoldWindow_PaddingWidth'])) || 0;
//----------------------------------------------------------------------------


// ---プラグインコマンド-------------------------------------------------------------
var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'ResidentWindow') {
        switch (args[0]) {
            case 'Show':
                inVal.WinON = true;
                break;
            case 'Hide':
                inVal.WinON = false;
                break;
            default: // トラブル調査用にスペルミスの場合はログに書き出し
                console.log('Unknown ResidentWindow argument: "' + args[0] + '"');
                break;
        }
    }
};
//----------------------------------------------------------------------------

/* ローカルスコープ変数の準備 */
if(RGW_type == 3){
    var RGW_bitmap = ImageManager.loadPicture('GoldWindowPictue', 0);
}







//-----------------------------------------------------------------------------
// Window_ResidentGold
//-----------------------------------------------------------------------------
/* マップ画面に常駐する所持金ウィンドウを扱うクラスです */

function Window_ResidentGold() {
    this.initialize.apply(this, arguments);
}

Window_ResidentGold.prototype = Object.create(Window_Gold.prototype);
Window_ResidentGold.prototype.constructor = Window_ResidentGold;

Window_ResidentGold.prototype.initialize = function(x, y) {
    Window_Gold.prototype.initialize.call(this, x, y);
    this.refresh();
};

/* 描画内容の更新 */
Window_ResidentGold.prototype.refresh = function(){
    this.last_gold = $gameParty.gold();
    this.last_WinON = inVal.WinON;
    var x = this.textPadding() + RGW_paddingWidth;
    var y = (this.contentsHeight() - Window_Base.prototype.lineHeight() ) / 2;
    var icon_y = (this.contentsHeight() - Window_Base._iconWidth) / 2;
    var width = this.contentsWidth();
    this.contents.clear();
    if(RGW_type == 3){
        this.drawBackground.call(this);
    }
    if(RGW_icon === 0){
        this.drawCurrencyValue(this.value(), TextManager.currencyUnit, -x, y, width);
    }else{
        this.drawText(this.value(), -x, y, this.contentsWidth(), 'right');
        this.drawIcon(RGW_icon, x, icon_y);
    }
};

/* フレーム毎の更新処理 （更新条件も記述）*/
Window_ResidentGold.prototype.update = function(){
    Window_Base.prototype.update.call(this);
    if(this.last_gold != $gameParty.gold()) {
        this.refresh();
    }
    if(this.last_WinON != inVal.WinON){
        this.refresh();
    }
};

/* ウィンドウを開く処理 */
Window_ResidentGold.prototype.open = function(){
    this.refresh();
    Window_Gold.prototype.open.call(this);
};

/* ウィンドウを閉じる時に一瞬で消えるように仕様を変更 */
Window_ResidentGold.prototype.updateClose = function() {
    if (this._closing) {
        this.openness -= 255;
        if (this.isClosed()) {
            this._closing = false;
        }
    }
};

/* コンテンツの横幅取得 */
Window_ResidentGold.prototype.contentsWidth = function() {
    if(RGW_type == 3){
        return RGW_bitmap.width;
    }else{
        return RGW_width;
    }
};

/* コンテンツの縦幅取得 */
Window_ResidentGold.prototype.contentsHeight = function() {
    if(RGW_type == 3){
        return RGW_bitmap.height;
    }else{
        return RGW_height;
    }
};

/* ウィンドウの背景画像を描画 */
Window_ResidentGold.prototype.drawBackground = function() {
    this.contents.blt(RGW_bitmap, 0, 0, RGW_bitmap.width, RGW_bitmap.height, 0, 0);
};

/* 他のプラグインからもアクセスできるようにエクスポート */
window.Window_ResidentGold = Window_ResidentGold;


//-----------------------------------------------------------------------------
// Scene_Map
//-----------------------------------------------------------------------------
/* シーンを扱うクラス（rpg_scenes.jpに元々あるクラス） */

/* マップ画面開始時の処理（当スクリプトで追加したウィンドウを開く処理を追加） */
var scene_map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
    scene_map_start.call(this);
    if(inVal.WinON){
        if(RFW_ON){
            this.face_window.open();
        }
        if(RSW_ON){
            this.status_window.open();
        }
        if(RGW_ON){
            this.gold_window.open();
        }
    }
};

/* 顔グラウィンドウを生成する処理 */
Scene_Map.prototype.createResidentFaceWindow = function(){
    this.face_window = new Window_ResidentFace(this);
    this.face_window.width = 176;
    this.face_window.height = 176;
    this.face_window.x = RFW_x;
    this.face_window.y = RFW_y;
    this.face_window.padding = 0;
    this.face_window.openness = 0;
    if(RFW_FrameON){
        this.face_window.setBackgroundType(2);
    }
    else{
        this.face_window.setBackgroundType(RFW_type);
    }
    this.addWindow(this.face_window);
};

/* ステータスウィンドウを生成する処理 */
Scene_Map.prototype.createResidentStatusWindow = function(){
    this.status_window = new Window_ResidentStatus(this);
    var plusPos = 32;
    if(RSW_type == 2){
        plusPos = 0;
    }
    if(RSW_GaugeFrameON){
        this.status_window.width = 410+plusPos;
        if(RSW_TPGaugeON){
            this.status_window.height = ( 28*3 + RSW_paddingHeight*2 )+plusPos;
        }
        else{
            this.status_window.height = ( 28*2 + RSW_paddingHeight )+plusPos;
        }
    }
    else{
        this.status_window.width = 186+plusPos;
        if(RSW_TPGaugeON){
            this.status_window.height = (6*3 + 30*3 + RSW_paddingHeight*2 + plusPos);
        }
        else{
            this.status_window.height = (6*2 + 30*2 + RSW_paddingHeight + plusPos);
        }
    }
    this.status_window.x = RSW_x;
    this.status_window.y = RSW_y;
    this.status_window.padding = 0;
    this.status_window.openness = 0;
    this.status_window.setBackgroundType(RSW_type);
    this.addWindow(this.status_window);
};

/* 所持金ウィンドウを生成する処理 */
Scene_Map.prototype.createResidentGoldWindow = function(){
    this.gold_window = new Window_ResidentGold(this);
    this.gold_window.x = RGW_x;
    this.gold_window.y = RGW_y;
    if(RGW_type == 3){
        this.gold_window.width = RGW_bitmap.width;
        this.gold_window.height = RGW_bitmap.height;
        this.gold_window.setBackgroundType(2);
    }
    else{
        this.gold_window.width = RGW_width;
        this.gold_window.height = RGW_height;
        this.gold_window.setBackgroundType(RGW_type);
    }
    this.gold_window.padding = 0;
    this.gold_window.openness = 0;
    this.addWindow(this.gold_window);
};

/* 全ウィンドウを生成する処理 */
var scene_map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
    scene_map_createAllWindows.call(this);
    this.createResidentFaceWindow(this);
    this.createResidentStatusWindow(this);
    this.createResidentGoldWindow(this);
};

var scene_map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    scene_map_update.call(this);
    if(inVal.last_WinState != inVal.WinON){
        if(inVal.WinON === false){
            this.face_window.close();
            this.status_window.close();
            this.gold_window.close();
            inVal.last_WinState = false;
        }
        else if(inVal.WinON === true){
            if(RFW_ON){
                this.face_window.open();
            }
            if(RSW_ON){
                this.status_window.open();
            }
            if(RGW_ON){
                this.gold_window.open();
            }
            inVal.last_WinState = true;
        }
    }
};

/* シーンがマップ以外に遷移した時にウィンドウを見えなくする処理 */
var scene_map_stop = Scene_Map.prototype.stop;
Scene_Map.prototype.stop = function() {
    this.face_window.close();
    this.status_window.close();
    this.gold_window.close();
    scene_map_stop.call(this);
};

})();