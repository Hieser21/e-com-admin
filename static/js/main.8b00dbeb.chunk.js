(this["webpackJsonpe-commerce-admin-panel"]=this["webpackJsonpe-commerce-admin-panel"]||[]).push([[0],{26:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(0),a=n.n(r),c=n(15),o=n.n(c),i=(n(34),n(6)),d=n(7),u=n(9),h=n(8),l=(n(35),n(36),n(37),n(47)),p=n(49),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).activeProducts=function(){s.setState({productsClass:"active",ordersClass:"",messagesClass:""})},s.activeMessages=function(){s.setState({productsClass:"",ordersClass:"",messagesClass:"active"})},s.activeOrders=function(){s.setState({productsClass:"",ordersClass:"active",messagesClass:""})},s.state={productsClass:"active",ordersClass:"",messagesClass:""},s}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(l.a,{expand:"lg",bg:"dark",variant:"dark",fixed:"top",children:[Object(s.jsx)(l.a.Brand,{children:"adminPanel"}),Object(s.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(s.jsxs)(p.a,{className:"mr-auto",children:[Object(s.jsx)(p.a.Link,{onClick:function(){e.props.onRouteChange("products"),e.activeProducts()},className:this.state.productsClass,children:"Products"}),Object(s.jsx)(p.a.Link,{onClick:function(){e.props.onRouteChange("orders"),e.activeOrders()},className:this.state.ordersClass,children:"Orders"}),Object(s.jsx)(p.a.Link,{onClick:function(){e.props.onRouteChange("messages"),e.activeMessages()},className:this.state.messagesClass,children:"Messages"})]}),Object(s.jsx)(p.a,{className:"mr",children:Object(s.jsx)(p.a.Link,{onClick:this.props.signOut,children:"Logout"})})]})]})}}]),n}(a.a.Component),b=(n(41),n(48)),O=n(46),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onEnter=function(e){"Enter"===e.key&&s.onSubmit()},s.onUserNameChange=function(e){s.setState({userName:e.target.value})},s.onPasswordChange=function(e){s.setState({password:e.target.value})},s.onSubmit=function(){s.state.password&&s.state.userName?fetch("https://backdoor.cyclic.app/users/adminLogin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:s.state.userName,password:s.state.password})}).then((function(e){return e.json()})).then((function(e){(String(e).includes("worng credentials")||String(e).includes("errorTypeError"))&&alert("Invalid user name or password"),e.userName&&(s.props.loadUser(e.userName),s.props.onRouteChange("products"))})):alert("Please fill in all the required fields.")},s.state={userName:"",password:""},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"center_div",children:Object(s.jsxs)(b.a,{children:[Object(s.jsxs)(b.a.Group,{controlId:"formBasicUserName",children:[Object(s.jsx)(b.a.Label,{children:"User name "}),Object(s.jsx)(b.a.Control,{type:"text",placeholder:"Enter user name",onChange:this.onUserNameChange,onKeyPress:this.onEnter})]}),Object(s.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsx)(b.a.Label,{children:"Password"}),Object(s.jsx)(b.a.Control,{type:"password",placeholder:"Password",onChange:this.onPasswordChange,onKeyPress:this.onEnter})]}),Object(s.jsx)(O.a,{variant:"primary",type:"button",onClick:this.onSubmit,children:"Login"})]})})}}]),n}(a.a.Component),f=(n(42),n(50)),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).cancelOrder=function(){fetch("https://backdoor.cyclic.app/orders/orderstatus",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:e.props.date,email:e.props.email,status:"Canceled"})}).then((function(e){return e.json()})).then((function(t){e.props.refreshOrders()}))},e.shipOrder=function(){fetch("http://localhost:9000/orders/orderstatus",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:e.props.date,email:e.props.email,status:"Shipped"})}).then((function(e){return e.json()})).then((function(t){e.props.refreshOrders()}))},e.completedOrder=function(){fetch("http://localhost:9000/orders/orderstatus",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:e.props.date,email:e.props.email,status:"Completed"})}).then((function(e){return e.json()})).then((function(t){e.props.refreshOrders()}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=new Date(this.props.date);return Object(s.jsxs)("div",{children:[Object(s.jsxs)(f.a,{children:[Object(s.jsxs)(f.a.Header,{children:[Object(s.jsx)("strong",{children:"Order placed: "})," ",e.toUTCString()]}),Object(s.jsxs)(f.a.Body,{children:[Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Username:"})," ",this.props.username]}),Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Email:"})," ",this.props.email]}),Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Products:"})," ",this.props.products]}),Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Price:"})," \u20b9 ",this.props.price]}),Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Address:"})," ",this.props.address]}),Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Status:"})," ",this.props.status]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(O.a,{variant:"primary",size:"sm",onClick:this.cancelOrder,style:{margin:"1em"},children:"Cancel"}),Object(s.jsx)(O.a,{variant:"primary",size:"sm",onClick:this.shipOrder,style:{margin:"1em"},children:"Ship"}),Object(s.jsx)(O.a,{variant:"primary",size:"sm",onClick:this.completedOrder,style:{margin:"1em"},children:"Complete"})]})]})]}),Object(s.jsx)("br",{})]})}}]),n}(a.a.Component),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).refresh=function(){fetch("http://localhost:9000/orders/orders").then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})),e.setState({ordersObj:t})}))},e.state={ordersObj:""},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://backdoor.cyclic.app/orders/orders").then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})),e.setState({ordersObj:t})}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"centerO",children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:this.state.ordersObj?this.state.ordersObj.map((function(t){return Object(s.jsx)(g,{date:t.date,products:t.productnames,price:t.price,address:t.address,status:t.status,refreshOrders:e.refresh,email:t.email,username:t.username},t.date)})):Object(s.jsx)("div",{})})})})}}]),n}(a.a.Component),v=(n(26),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).deleteProduct=function(){window.confirm("You sure.?")&&fetch("https://backdoor.cyclic.app/products/deleteproduct",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({productname:e.props.productname})}).then((function(e){return e.json()})).then((function(t){"Done"===t&&e.props.refresh()}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)(f.a,{style:{width:"18rem"},children:[Object(s.jsx)(f.a.Img,{variant:"top",src:"https://backdoor.cyclic.app/"+this.props.image,className:"imgs"}),Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Title,{children:this.props.productname}),Object(s.jsx)(f.a.Text,{style:{fontSize:"13px"},children:this.props.description}),Object(s.jsxs)(f.a.Text,{children:["\u20b9 ",this.props.price,Object(s.jsx)(O.a,{className:"float-right",variant:"primary",onClick:this.deleteProduct,children:"Delete"})]})]})]}),Object(s.jsx)("br",{})]})}}]),n}(a.a.Component)),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).refresh=function(){fetch("http://localhost:9000/products/getproducts").then((function(e){return e.json()})).then((function(e){return s.setState({products:e})}))},s.addProducts=function(){s.props.onRouteChange("addproducts")},s.state={products:[]},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://backdoor.cyclic.app/products/getproducts").then((function(e){return e.json()})).then((function(t){return e.setState({products:t})}))}},{key:"componentWillUnmount",value:function(){this.setState({products:[]})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(O.a,{className:"addButton float-right",variant:"primary",onClick:this.addProducts,children:"Add product"})}),Object(s.jsx)("div",{className:"center_divP",children:Object(s.jsx)("div",{className:"grid-wrapper",children:this.state.products.map((function(t){return Object(s.jsx)(v,{productname:t.productname,description:t.description,price:t.price,image:t.image,refresh:e.refresh},t.productname)}))})})]})}}]),n}(a.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onProductChange=function(e){s.setState({productname:e.target.value})},s.onPriceChange=function(e){s.setState({price:e.target.value})},s.onDescriptionChange=function(e){s.setState({description:e.target.value})},s.onTypeChange=function(e){s.setState({type:e.target.value})},s.onImageChange=function(e){s.setState({image:e.target.files[0]})},s.onSubmit=function(){if(s.state.productname&&s.state.price&&s.state.type&&s.state.description&&s.state.image){var e=new FormData;e.append("productname",s.state.productname),e.append("price",s.state.price),e.append("description",s.state.description),e.append("type",s.state.type),e.append("image",s.state.image),fetch("https://backdoor.cyclic.app/products/addproduct",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){e.productname&&s.props.onRouteChange("products")})).catch((function(e){return alert("".concat(e))}))}else alert("Please fill in all the required fields.")},s.state={productname:"",price:"",description:"",type:"phone",image:""},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"centerForm",children:Object(s.jsxs)(b.a,{children:[Object(s.jsxs)(b.a.Group,{children:[Object(s.jsx)(b.a.Label,{children:"Product name"}),Object(s.jsx)(b.a.Control,{type:"text",onChange:this.onProductChange})]}),Object(s.jsxs)(b.a.Group,{children:[Object(s.jsx)(b.a.Label,{children:"Description"}),Object(s.jsx)(b.a.Control,{type:"text",onChange:this.onDescriptionChange})]}),Object(s.jsxs)(b.a.Group,{children:[Object(s.jsx)(b.a.Label,{children:"Price"}),Object(s.jsx)(b.a.Control,{type:"text",onChange:this.onPriceChange})]}),Object(s.jsxs)(b.a.Group,{children:[Object(s.jsx)(b.a.Label,{children:"Category"}),Object(s.jsxs)(b.a.Control,{as:"select",onChange:this.onTypeChange,children:[Object(s.jsx)("option",{children:"phone"}),Object(s.jsx)("option",{children:"headphone"}),Object(s.jsx)("option",{children:"laptop"}),Object(s.jsx)("option",{children:"tablet"})]})]}),Object(s.jsx)(b.a.Group,{children:Object(s.jsx)(b.a.File,{label:"Image",onChange:this.onImageChange})}),Object(s.jsx)(O.a,{variant:"primary",type:"button",onClick:this.onSubmit,children:"Add"})]})})}}]),n}(a.a.Component),S=(n(43),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).done=function(){fetch("https://backdoor.cyclic.app/contacts/messagestatus",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:e.props.date,email:e.props.email,status:"Solved"})}).then((function(e){return e.json()})).then((function(t){e.props.refresh()}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=new Date(this.props.date);return Object(s.jsxs)("div",{children:[Object(s.jsxs)(f.a,{children:[Object(s.jsxs)(f.a.Header,{children:[Object(s.jsx)("strong",{children:"Date: "})," ",e.toUTCString()]}),Object(s.jsxs)(f.a.Body,{children:[Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Name:"})," ",this.props.name]}),Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Email:"})," ",this.props.email]}),Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Message:"})," ",this.props.message]}),Object(s.jsxs)(f.a.Text,{children:[Object(s.jsx)("strong",{children:"Status:"})," ",this.props.status]}),Object(s.jsx)("div",{children:"Solved"===this.props.status?Object(s.jsx)("div",{}):Object(s.jsx)(O.a,{variant:"primary",size:"sm",onClick:this.done,children:"Done"})})]})]}),Object(s.jsx)("br",{})]})}}]),n}(a.a.Component)),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).refresh=function(){fetch("http://localhost:9000/contacts/messages").then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})),e.setState({msgObj:t})}))},e.state={msgObj:""},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://backdoor.cyclic.app/contacts/messages").then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})),e.setState({msgObj:t})}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"centerM",children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:this.state.msgObj?this.state.msgObj.map((function(t){return Object(s.jsx)(S,{date:t.date,message:t.message,status:t.status,email:t.email,name:t.name,refresh:e.refresh},t.date)})):Object(s.jsx)("div",{})})})})}}]),n}(a.a.Component),N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:t}),localStorage.setItem("admin",t)},e.signOut=function(){e.setState({user:"",route:"login"}),localStorage.removeItem("admin")},e.onRouteChange=function(t){e.setState({route:t})},e.state={user:localStorage.getItem("admin")||"",route:""},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.state.user?this.setState({route:"products"}):this.setState({route:"login"})}},{key:"render",value:function(){var e,t;return"login"===this.state.route?e=Object(s.jsx)(m,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):"products"===this.state.route?(t=Object(s.jsx)(j,{onRouteChange:this.onRouteChange,signOut:this.signOut}),e=Object(s.jsx)(C,{onRouteChange:this.onRouteChange})):"orders"===this.state.route?(t=Object(s.jsx)(j,{onRouteChange:this.onRouteChange,signOut:this.signOut}),e=Object(s.jsx)(x,{})):"messages"===this.state.route?(t=Object(s.jsx)(j,{onRouteChange:this.onRouteChange,signOut:this.signOut}),e=Object(s.jsx)(k,{})):"addproducts"===this.state.route&&(t=Object(s.jsx)(j,{onRouteChange:this.onRouteChange,signOut:this.signOut}),e=Object(s.jsx)(y,{onRouteChange:this.onRouteChange})),Object(s.jsxs)("div",{className:"App",children:[t,e]})}}]),n}(r.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),P()}},[[44,1,2]]]);
//# sourceMappingURL=main.8b00dbeb.chunk.js.map