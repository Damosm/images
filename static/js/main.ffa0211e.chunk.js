(this.webpackJsonpimages=this.webpackJsonpimages||[]).push([[0],{57:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(29),i=a.n(r),l=a(7),o=a(8),j=a(10),u=a(9),d=a(32),b=a(2),h=a.p+"static/media/1.244493fb.jpg",m=a.p+"static/media/2.1f148332.jpg",p=a.p+"static/media/3.0a1b7d5a.jpg",O=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"carouselExampleIndicators",class:"carousel slide","data-ride":"carousel",children:[Object(n.jsxs)("ol",{className:"carousel-indicators",children:[Object(n.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:"active"}),Object(n.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),Object(n.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})]}),Object(n.jsxs)("div",{className:"carousel-inner",children:[Object(n.jsx)("div",{className:"carousel-item active",children:Object(n.jsx)("img",{className:"d-block w-100",style:{height:550},src:h,alt:"1"})}),Object(n.jsx)("div",{className:"carousel-item",children:Object(n.jsx)("img",{className:"d-block w-100",style:{height:550},src:m,alt:"2"})}),Object(n.jsx)("div",{className:"carousel-item",children:Object(n.jsx)("img",{className:"d-block w-100",style:{height:550},src:p,alt:"3"})})]}),Object(n.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:[Object(n.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(n.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(n.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:[Object(n.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(n.jsx)("span",{className:"sr-only",children:"Next"})]}),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{style:{fontSize:"calc(130px + 0.5vw)",textAlign:"right"},children:"Unsplash"})})]})}}]),a}(s.Component),v=a(17),x=a.n(v),g=a(30),f=a(12),N=a(31),y=a.n(N).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID HGj5Cc8LmUi92tui4tB1dZzqLK7TF_7zFGKz8NxJDKQ"}}),S=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onClick=function(e){e.preventDefault(),n.props.onSubmit(n.state.term)},n.onChange=function(e){n.setState({term:e.target.value})},n.state={term:""},n.onchange=n.onChange.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:"input-group input-group-lg",onSubmit:this.onClick,children:[Object(n.jsx)("input",{type:"text",value:this.state.term,onChange:this.onChange,class:"form-control",placeholder:"Recherche","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("button",{onClick:this.onClick,class:"btn btn-outline-secondary",style:{backgroundColor:"#A7A37E",color:"white"},type:"button",children:"Valider"})})]})})}}]),a}(c.a.Component),k=(a(57),function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=c.a.createRef(),n.setSpans=n.setSpans.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return console.log(a),Object(n.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(n.jsx)("a",{href:a.regular,target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{ref:this.imageRef,alt:t,src:a.regular})})})}}]),a}(c.a.Component)),w=function(e){var t=e.images.map((function(e){return Object(n.jsx)(k,{image:e},e.id)}));return Object(n.jsx)("div",{className:"image-list",style:{marginTop:"10px"},children:t})},C=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onSearchSubmit=function(){var e=Object(g.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/search/photos",{params:{query:t,lang:"fr",per_page:50}});case 2:a=e.sent,n.setState({images:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={images:[]},n.onSearchSubmit=n.onSearchSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"ui container",children:[Object(n.jsx)(S,{onSubmit:this.onSearchSubmit}),Object(n.jsx)(w,{images:this.state.images})]})})}}]),a}(s.Component),D=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={date:new Date},n.timer=null,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=window.setInterval((function(){e.setState({date:new Date})}))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timer)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h5",{style:{textAlign:"right"},children:this.state.date.toLocaleString()})})}}]),a}(s.Component),E=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(d.a,{children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/images",children:"Home"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(n.jsx)("ul",{className:"navbar-nav",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"/imagesCss",children:"Search"})})})}),Object(n.jsx)("div",{children:Object(n.jsx)(D,{})})]}),Object(n.jsxs)("div",{className:"main-route-place",children:[Object(n.jsx)(b.a,{exact:!0,path:"/images",component:O}),Object(n.jsx)(b.a,{path:"/imagesCss",component:C})]})]})}}]),a}(c.a.Component);i.a.render(Object(n.jsx)(E,{}),document.querySelector("#root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.ffa0211e.chunk.js.map