/*
 * jQuery mmenu dropdown add-on
 * mmenu.frebsite.nl
 */
!function(t){var o="mmenu",e="dropdown";t[o].addons[e]={setup:function(){if(this.opts.offCanvas){var r=this,f=this.opts[e],p=this.conf[e];if(a=t[o].glbl,"boolean"==typeof f&&f&&(f={drop:f}),"object"!=typeof f&&(f={}),"string"==typeof f.position&&(f.position={of:f.position}),f=this.opts[e]=t.extend(!0,{},t[o].defaults[e],f),f.drop){var l;this.bind("initMenu:after",function(){if(this.$menu.addClass(i.menu+"_"+e),"string"!=typeof f.position.of){var o=this._getOriginalMenuId();o&&o.length&&(f.position.of='[href="#'+o+'"]')}"string"==typeof f.position.of&&(l=t(f.position.of),f.event=f.event.split(" "),1==f.event.length&&(f.event[1]=f.event[0]),"hover"==f.event[0]&&l.on(s.mouseenter+"-"+e,function(){r.open()}),"hover"==f.event[1]&&this.$menu.on(s.mouseleave+"-"+e,function(){r.close()}))}),this.bind("open:start",function(){this.$menu.data(n.style,this.$menu.attr("style")||""),a.$html.addClass(i.wrapper+"_dropdown")}),this.bind("close:finish",function(){this.$menu.attr("style",this.$menu.data(n.style)),a.$html.removeClass(i.wrapper+"_dropdown")});var h=function(t,o){var e=o[0],n=o[1],s="x"==t?"scrollLeft":"scrollTop",r="x"==t?"outerWidth":"outerHeight",h="x"==t?"left":"top",u="x"==t?"right":"bottom",d="x"==t?"width":"height",c="x"==t?"maxWidth":"maxHeight",m=null,v=a.$wndw[s](),x=l.offset()[h]-=v,b=x+l[r](),w=a.$wndw[d](),g=p.offset.button[t]+p.offset.viewport[t];if(f.position[t])switch(f.position[t]){case"left":case"bottom":m="after";break;case"right":case"top":m="before"}null===m&&(m=x+(b-x)/2<w/2?"after":"before");var $,y;return"after"==m?($="x"==t?x:b,y=w-($+g),e[h]=$+p.offset.button[t],e[u]="auto",f.tip&&n.push(i.menu+"_tip-"+("x"==t?"left":"top"))):($="x"==t?b:x,y=$-g,e[u]="calc( 100% - "+($-p.offset.button[t])+"px )",e[h]="auto",f.tip&&n.push(i.menu+"_tip-"+("x"==t?"right":"bottom"))),e[c]=Math.min(p[d].max,y),[e,n]},u=function(t){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(n.style));var o=[{},[]];o=h.call(this,"y",o),o=h.call(this,"x",o),this.$menu.css(o[0]),f.tip&&this.$menu.removeClass(i.tipleft+" "+i.tipright+" "+i.tiptop+" "+i.tipbottom).addClass(o[1].join(" "))}};this.bind("open:start",u),a.$wndw.on(s.resize+"-"+e,function(t){u.call(r)}),this.opts.offCanvas.blockUI||a.$wndw.on(s.scroll+"-"+e,function(t){u.call(r)})}}},add:function(){i=t[o]._c,n=t[o]._d,s=t[o]._e,i.add("dropdown"),s.add("mouseenter mouseleave resize scroll")},clickAnchor:function(t,o){}},t[o].defaults[e]={drop:!1,event:"click",position:{},tip:!0},t[o].configuration[e]={offset:{button:{x:-5,y:5},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var i,n,s,a}(jQuery);