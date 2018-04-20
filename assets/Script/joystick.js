// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
		is_debug:false,
		stick:{
			type:cc.Node,
			default:null,
		},
		max_R:120,
    },
//根据坐标点计算物体的角度
    computeDirection(pos){
		var angle=Math.atan2(pos.y,pos.x);
		
	},

    // onLoad () {},
	//=unity void start
    start () {
		this.stick.setPosition(cc.p(0,0));
		this.stick.on(cc.Node.EventType.TOUCH_MOVE,function(e){
			var w_pos=e.getLocation();
			var pos=this.node.convertToNodeSpaceAR(w_pos);//这句的意思是获取局部坐标
			var len=cc.pLength(pos);
			if(len>this.max_R){
				pos.x=pos.x*this.max_R/len;
				pos.y=pos.y*this.max_R/len;
			}
			this.stick.setPosition(pos);
			this.computeDirection(pos);
		}.bind(this),this);
		this.stick.on(cc.Node.EventType.TOUCH_END,function(e){
			this.stick.setPosition(cc.p(0,0));
		}.bind(this),this);
			this.stick.on(cc.Node.EventType.TOUCH_CANCEL,function(e){
			this.stick.setPosition(cc.p(0,0));
		}.bind(this),this);
		
    },
	
	//=unity void update
    update (dt) {
		
	},
});
