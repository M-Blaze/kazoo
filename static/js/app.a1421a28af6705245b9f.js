webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var s=n(8),a=n(89),i=n.n(a),r=n(23),o=n(28),u=[{path:"/dashboard",name:"dashboard",title:"Dashboard",component:i.a},{path:"*",redirect:{name:"dashboard"}}],c=u.concat(r.a,o.a);t.a=new s.a({routes:c})},function(e,t,n){"use strict";var s=n(1),a=n(110),i=n(109),r=n.n(i),o=n(26),u=n(31);s.a.use(a.a);t.a=new a.a.Store({modules:{messages:o.a,people:u.a},plugins:[r()({key:"kazoo"})],strict:!1})},,function(e,t,n){n(74);var s=n(0)(n(34),n(96),null,null);e.exports=s.exports},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),a=n(8),i=n(21),r=n(19),o=n.n(r),u=n(20),c=n.n(u),l=n(17),m=n(18);s.a.config.productionTip=!1,s.a.use(o.a,{id:"UA-83598448-1",router:l.a}),s.a.use(i.a.plugin,m.a,l.a),s.a.use(a.a),new s.a({el:"#app",router:l.a,store:m.a,render:function(e){return e(c.a)}})},function(e,t,n){"use strict";var s=n(82),a=n.n(s),i=n(83),r=n.n(i),o=n(81),u=n.n(o);t.a=[{path:"/messages",name:"messages",component:a.a,title:"Messages",redirect:{name:"messages-welcome"},children:[{path:"welcome",name:"messages-welcome",component:r.a},{path:":id",name:"messages-details",component:u.a}]}]},function(e,t,n){"use strict";t.a={readItem:function(e,t){setTimeout(function(){return e.commit("itemIsRead",{item:t})},500)}}},function(e,t,n){"use strict";t.a={getItems:function(e){return e.items},getItem:function(e){return function(t){return e.items.find(function(e){return e.id===t.id})}}}},function(e,t,n){"use strict";var s=n(24),a=n(25),i=n(27);t.a={namespaced:!0,state:{items:[{id:"5eb76728-3a7d-11e7-a919-92ebcb67fe33",name:"In in justo in ipsum lobortis",content:"<p>Morbi pulvinar sem in enim dignissim, vel ornare ligula sagittis. In in justo in ipsum lobortis consequat et non tortor. Proin et tempus ex. Proin consectetur eros a sapien tempor consequat. Cras rhoncus massa nec nulla hendrerit, vel hendrerit dui hendrerit. Maecenas gravida euismod velit eget dictum. Proin imperdiet dictum erat at dapibus. Sed nec metus tortor. Maecenas egestas ut risus id rutrum. Aenean non ipsum mauris. Proin volutpat risus eget enim auctor commodo. Morbi hendrerit convallis ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus accumsan magna sit amet arcu porta, id pretium mauris varius. Integer nisi enim, blandit nec fermentum at, pharetra mollis lorem.</p>",read:!0},{id:"5eb76a84-3a7d-11e7-a919-92ebcb67fe33",name:"Phasellus et quam sagittis",content:"<p>Quisque condimentum est ut orci sodales, vitae gravida urna efficitur. Phasellus et quam sagittis, consequat velit nec, consectetur tortor. Suspendisse id faucibus diam. Phasellus eget aliquet augue. Proin ultricies faucibus metus eget scelerisque. Praesent eu lacus mauris. Maecenas vitae enim sem. Nam sit amet convallis eros. Sed congue id ex nec eleifend. Nulla porta libero at massa posuere pellentesque. Aenean tincidunt turpis nibh, sed dictum risus blandit in. Vestibulum congue finibus odio, ac auctor erat dapibus at. Fusce molestie purus vel mi venenatis, ut mollis dui dapibus. Donec ultricies tincidunt quam, at auctor metus ultrices ac.</p>",read:!1},{id:"5eb76c50-3a7d-11e7-a919-92ebcb67fe33",name:"Praesent in porttitor lorem",content:"<p>Aliquam mattis semper mauris vitae placerat. Curabitur interdum quam id mi mattis efficitur. Etiam at arcu tortor. Praesent in porttitor lorem, tempor hendrerit nulla. Donec dapibus blandit velit vel vehicula. Nulla sit amet pretium turpis, id consectetur diam. Curabitur lacinia tincidunt est a sodales. Suspendisse faucibus quam vitae venenatis eleifend. Mauris blandit, nunc eu sodales scelerisque, elit erat porttitor ligula, in volutpat massa libero quis felis. Suspendisse volutpat tellus eu ullamcorper feugiat. </p>",read:!1}]},actions:s.a,getters:a.a,mutations:i.a}},function(e,t,n){"use strict";var s=n(1);t.a={itemIsRead:function(e,t){var n=e.items.find(function(e){return e.id===t.item.id});s.a.set(n,"read",!0)}}},function(e,t,n){"use strict";var s=n(87),a=n.n(s),i=n(88),r=n.n(i),o=n(85),u=n.n(o),c=n(84),l=n.n(c),m=n(86),d=n.n(m);t.a=[{path:"/people",name:"people",component:a.a,title:"People",redirect:{name:"people-welcome"},children:[{path:"welcome",name:"people-welcome",component:r.a},{path:"create",name:"people-create",component:l.a},{path:":id",name:"people-details",component:u.a},{path:":id/edit",name:"people-edit",component:d.a}]}]},function(e,t,n){"use strict";t.a={addPerson:function(e,t){setTimeout(function(){return e.commit("personIsAdded",{person:t})},500)},patchPerson:function(e,t){setTimeout(function(){return e.commit("personIsPatched",{person:t})},500)},removePerson:function(e,t){setTimeout(function(){return e.commit("personIsRemoved",{personId:t})},500)}}},function(e,t,n){"use strict";var s=n(45),a=n.n(s);t.a={getItems:function(e){return e.items},getItem:function(e){return function(t){return a()({},e.items.find(function(e){return e.id===t.id}))}}}},function(e,t,n){"use strict";var s=n(29),a=n(30),i=n(32);t.a={namespaced:!0,state:{items:[{id:"8d77b83a-c28e-430f-9177-8b443975d210",name:"Charles C. Swain",phone:"615-233-5488",function:"Director of photography",image:"static/male.svg"},{id:"6db8bb80-25d3-48f5-bea1-5e1215e9b3b7",name:"Nick M. Wright",phone:"423-349-9091",function:"Director of fun",image:"static/male.svg"},{id:"e2e412b8-7c1a-46d5-8841-5fae4b4b9a9a",name:"Gladys T. Garrett",phone:"661-469-8833",function:"Manager",image:"static/female.svg"}]},actions:s.a,getters:a.a,mutations:i.a}},function(e,t,n){"use strict";var s=n(1);t.a={personIsAdded:function(e,t){e.items.push(t.person)},personIsPatched:function(e,t){var n=t.person,a=e.items.map(function(e){return e.id===n.id?n:e});s.a.set(e,"items",a)},personIsRemoved:function(e,t){var n=e.items.filter(function(e){return e.id!==t.personId});s.a.set(e,"items",n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"route-timeline",computed:{items:function(){return this.$store.getters["timeline/getItems"]}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(80),a=n.n(s);t.default={components:{Navbar:a.a},name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(46),a=n.n(s);t.default={name:"navbar",computed:{routes:function(){var e=this,t=[];return a()(this.$router.options.routes).forEach(function(n){var s=e.$router.options.routes[n];s.title&&t.push(s)}),t}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"messages-details",computed:{item:function(){return this.$store.getters["messages/getItem"](this.$route.params)}},methods:{isItemRead:function(e){e.read||this.$store.dispatch("messages/readItem",e)},addTimeline:function(){this.$routeTimeline.set(this.item.name,"Message")}},mounted:function(){this.isItemRead(this.item),this.addTimeline()},watch:{item:function(e){this.isItemRead(e),this.addTimeline()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"messages",computed:{items:function(){return this.$store.getters["messages/getItems"]}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"messages-welcome",mounted:function(){this.$store.dispatch("timeline/addTimelineItem",{title:"Messages",route:this.$route})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(79);t.default={name:"people-create",data:function(){return{person:{id:s(),name:"",phone:"",function:"",image:"static/male.svg"}}},methods:{addPerson:function(){this.$store.dispatch("people/addPerson",this.person),this.person={id:s(),name:"",phone:"",function:"",image:"static/male.svg"}}},mounted:function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"people-details",computed:{person:function(){return this.$store.getters["people/getItem"](this.$route.params)}},methods:{removePerson:function(){this.$store.dispatch("people/removePerson",this.person.id),this.$router.push({name:"people-welcome"})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"people-details",computed:{person:function(){return this.$store.getters["people/getItem"](this.$route.params)}},methods:{patchPerson:function(){this.$store.dispatch("people/patchPerson",this.person)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"people",computed:{items:function(){return this.$store.getters["people/getItems"]}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"people-welcome",mounted:function(){this.$store.dispatch("timeline/addTimelineItem",{title:"People",route:this.$route})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"dashboard",mounted:function(){this.$store.dispatch("timeline/addTimelineItem",{title:"Dashboard",route:this.$route})},data:function(){return{msg:"Kazoo admin"}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,,,,function(e,t,n){var s=n(0)(n(35),n(94),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(36),n(98),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(37),n(95),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(38),n(92),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(39),n(97),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(40),n(99),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(41),n(102),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(42),n(100),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(43),n(91),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(44),n(101),null,null);e.exports=s.exports},function(e,t,n){var s=n(0)(n(33),n(93),null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-3"},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:{name:"people"}}},[e._v("\n                People\n            ")])],1),e._v(" "),n("li",{staticClass:"breadcrumb-item active"},[e._v("\n            Welcome\n        ")])]),e._v(" "),n("h1",[e._v("Welcome")]),e._v(" "),n("p",[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium assumenda dolor eligendi enim eos, impedit in ipsum laboriosam maxime mollitia natus necessitatibus neque, odit quia, quibusdam sed soluta totam.\n    ")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-3"},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:{name:"messages"}}},[e._v("\n                mail\n            ")])],1),e._v(" "),n("li",{staticClass:"breadcrumb-item active"},[e._v("\n            Welcome\n        ")])]),e._v(" "),n("h1",[e._v("Welcome")]),e._v(" "),n("p",[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium assumenda dolor eligendi enim eos, impedit in ipsum laboriosam maxime mollitia natus necessitatibus neque, odit quia, quibusdam sed soluta totam.\n    ")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline"},[e._l(e.items,function(t){return e._t("item",[n("router-link",{staticClass:"timeline-item",attrs:{to:t.route}},[n("h5",{staticClass:"timeline-title"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"timeline-title"},[e._v(e._s(t.subtitle))]),e._v(" "),n("div",{staticClass:"timeline-date"},[e._v(e._s(e._f("timelineDate")(t.created)))])])],{title:t.title,subtitle:t.subtitle,created:t.created,route:t.route})})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-toggleable-md navbar-light bg-faded d-block"},[e._m(0),e._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"dashboard"}}},[e._v("\n        Kazoo\n    ")]),e._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[n("ul",{staticClass:"navbar-nav mr-auto d-block"},e._l(e.routes,function(t){return n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link px-0",attrs:{to:t,"active-class":"active"}},[e._v("\n                    "+e._s(t.title)+"\n                ")])],1)}))])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-xl-3 bg-info vh-100"},e._l(e.items,function(t){return n("div",{key:"item.id",staticClass:"py-1"},[n("router-link",{staticClass:"d-block text-white",class:{"font-weight-bold":!t.read},attrs:{to:{name:"messages-details",params:{id:t.id}}}},[e._v("\n                "+e._s(t.name)+"\n            ")])],1)})),e._v(" "),n("div",{staticClass:"col-md-8 col-xl-9 vh-100"},[n("router-view")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin"},[n("div",{staticClass:"admin-sidebar bg-faded"},[n("navbar")],1),e._v(" "),n("div",{staticClass:"admin-body",attrs:{role:"main"}},[n("div",{staticClass:"container-fluid"},[n("router-view")],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-3"},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:{name:"people"}}},[e._v("\n                People\n            ")])],1),e._v(" "),n("li",{staticClass:"breadcrumb-item active"},[e._v("\n            Add person\n        ")])]),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.addPerson()}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"person-name"}},[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.name,expression:"person.name"}],staticClass:"form-control",attrs:{type:"text",id:"person-name"},domProps:{value:e.person.name},on:{input:function(t){t.target.composing||(e.person.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"person-phone"}},[e._v("Phone")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.phone,expression:"person.phone"}],staticClass:"form-control",attrs:{type:"text",id:"person-phone"},domProps:{value:e.person.phone},on:{input:function(t){t.target.composing||(e.person.phone=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"person-function"}},[e._v("Function")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.function,expression:"person.function"}],staticClass:"form-control",attrs:{type:"text",id:"person-function"},domProps:{value:e.person.function},on:{input:function(t){t.target.composing||(e.person.function=t.target.value)}}})]),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\n            Add person\n        ")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-3"},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:{name:"messages"}}},[e._v("\n                mail\n            ")])],1),e._v(" "),n("li",{staticClass:"breadcrumb-item active"},[e._v("\n            "+e._s(e.item.name)+"\n        ")])]),e._v(" "),n("h1",[e._v(e._s(e.item.name))]),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.item.content)}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-3"},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:{name:"people"}}},[e._v("\n                People\n            ")])],1),e._v(" "),n("li",{staticClass:"breadcrumb-item active"},[e._v("\n            "+e._s(e.person.name)+"\n        ")])]),e._v(" "),n("h1",[e._v(e._s(e.person.name))]),e._v(" "),n("div",[n("i",{staticClass:"fa fa-phone"}),e._v(" "),n("img",{attrs:{src:e.person.image,alt:""}}),e._v(" "),n("div",[e._v("\n            "+e._s(e.person.phone)+"\n        ")]),e._v(" "),n("div",[e._v("\n            "+e._s(e.person.function)+"\n        ")]),e._v(" "),n("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"people-edit",params:{id:e.person.id}}}},[e._v("\n            edit\n        ")]),e._v(" "),n("a",{staticClass:"btn btn-danger",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.removePerson()}}},[e._v("remove")])],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-xl-3 bg-inverse vh-100"},[n("div",{staticClass:"py-3"},[n("router-link",{staticClass:"btn btn-outline-primary btn-block",attrs:{to:{name:"people-create"}}},[e._v("Add person")])],1),e._v(" "),e._l(e.items,function(t){return n("router-link",{key:"item.id",staticClass:"row py-2",attrs:{to:{name:"people-details",params:{id:t.id}}}},[n("div",{staticClass:"col-3 col-md-4"},[n("img",{staticClass:"img-fluid rounded-circle bg-faded img-thumbnail",attrs:{src:t.image,alt:""}})]),e._v(" "),n("div",{staticClass:"col-9 col-md-8 text-white"},[e._v("\n                "+e._s(t.name)+"\n                "),n("div",{staticClass:"text-muted"},[e._v("\n                    "+e._s(t.function)+"\n                ")])])])})],2),e._v(" "),n("div",{staticClass:"col-md-8 col-xl-9 vh-100"},[n("router-view")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("route-timeline")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-3"},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:{name:"people"}}},[e._v("\n                People\n            ")])],1),e._v(" "),n("li",{staticClass:"breadcrumb-item active"},[e._v("\n            "+e._s(e.person.name)+"\n        ")])]),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.patchPerson()}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"person-name"}},[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.name,expression:"person.name"}],staticClass:"form-control",attrs:{type:"text",id:"person-name"},domProps:{value:e.person.name},on:{input:function(t){t.target.composing||(e.person.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"person-phone"}},[e._v("Phone")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.phone,expression:"person.phone"}],staticClass:"form-control",attrs:{type:"text",id:"person-phone"},domProps:{value:e.person.phone},on:{input:function(t){t.target.composing||(e.person.phone=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"person-function"}},[e._v("Function")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.function,expression:"person.function"}],staticClass:"form-control",attrs:{type:"text",id:"person-function"},domProps:{value:e.person.function},on:{input:function(t){t.target.composing||(e.person.function=t.target.value)}}})]),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\n            Update person\n        ")])])])},staticRenderFns:[]}}],[22]);
//# sourceMappingURL=app.a1421a28af6705245b9f.js.map