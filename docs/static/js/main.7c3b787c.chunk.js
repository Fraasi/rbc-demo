(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){e.exports=n(316)},152:function(e,t,n){},153:function(e,t,n){},314:function(e,t,n){},315:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(5),r=n.n(o),s=(n(152),n(18)),i=n(12),c=n(21),d=n(19),u=n(20),v=(n(153),n(98)),m=n(24),h=n(97),p=(n(288),n(144)),E=n.n(p),b=(n(300),n(38)),f=n.n(b),D=n(95),w=n(146);n(313),n(314);D.setAppElement("#root");var g={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50vw",height:"55vh",overflow:"visible"}},O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("button",{type:"button",className:"date-input-button",onClick:this.props.onClick},this.props.value)}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(w.a,Object.assign({},this.props,{customInput:l.a.createElement(O,null),required:!0,dateFormat:"dd/MM/yyyy HH:mm",showTimeSelect:!0,timeCaption:"Time",timeFormat:"HH:mm",timeIntervals:30,showMonthDropdown:!0,showWeekNumbers:!0,shouldCloseOnSelect:!0,popperModifiers:{offset:{enabled:!0,offset:"-40px, 0px"}}}))}}]),t}(a.Component),M=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleTitleChange=function(e){n.setState({title:e.target.value})},n.handleStartDateChange=function(e){n.setState({start:e})},n.handleEndDateChange=function(e){n.setState({end:e})},n.handleDescChange=function(e){n.setState({desc:e.target.value})},n.handleDeleteButton=function(){n.props.handleEventDelete(),n.props.closeModal()},n.handleSubmitButton=function(e){e.preventDefault(),n.state.start>n.state.end?alert("Error, time paradox!!!\nEvent end date can not be earlier than event start date!"):(n.props.handleEventSave(n.state),n.props.closeModal())};var a=n.props.modalEvent,l=a.title,o=void 0===l?"":l,r=a.start,i=a.end,u=a.desc,v=a.id;return n.state={title:o,start:r,end:i,desc:u,id:v},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.modalIsOpen,n=e.closeModal,a=e.isNewEvent,o=this.state,r=o.title,s=o.start,i=o.end,c=o.desc;return l.a.createElement(D,{isOpen:t,style:g,shouldCloseOnOverlayClick:!0,onRequestClose:n,closeTimeoutMS:200},l.a.createElement("form",{onSubmit:this.handleSubmitButton,className:"form-wrapper"},l.a.createElement("div",null,l.a.createElement("label",null,"Event title",l.a.createElement("input",{type:"text",value:r,onChange:this.handleTitleChange,placeholder:"No title",required:!0,autoFocus:!0}))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("label",null,"Event start",l.a.createElement(y,{selected:s,onChange:this.handleStartDateChange}))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("label",null,"Event end",l.a.createElement(y,{selected:i,onChange:this.handleEndDateChange}))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("textarea",{onChange:this.handleDescChange,value:c,placeholder:"Event description"})),l.a.createElement("div",{className:"modal-buttons"},!a&&l.a.createElement("button",{type:"button",onClick:this.handleDeleteButton},"Delete event"),l.a.createElement("button",{type:"button",onClick:n},"Cancel"),l.a.createElement("button",{type:"submit"},"Save"))))}}]),t}(a.Component),S=(new Date).getMonth(),j=[{id:1,title:"All Day Event very long title",allDay:!0,start:new Date(2019,S,1,0),end:new Date(2019,S,1,24)},{id:4,title:"Some Event",start:new Date(2019,S,9,0,0,0),end:new Date(2019,S,10,0,0,0)},{id:5,title:"Conference",start:new Date(2019,S,11),end:new Date(2019,S,13),desc:"Big conference for important people"},{id:6,title:"Meeting",start:new Date(2019,S,12,10,30,0,0),end:new Date(2019,S,12,12,30,0,0),desc:"Pre-meeting meeting, to prepare for the meeting"},{id:7,title:"Lunch",start:new Date(2019,S,12,12,0,0,0),end:new Date(2019,S,12,13,0,0,0),desc:"Power lunch"},{id:8,title:"Meeting",start:new Date(2019,S,12,14,0,0,0),end:new Date(2019,S,12,15,0,0,0)},{id:9,title:"Happy Hour",start:new Date(2019,S,12,17,0,0,0),end:new Date(2019,S,12,17,30,0,0),desc:"Most important meal of the day"},{id:10,title:"Dinner",start:new Date(2019,S,12,20,0,0,0),end:new Date(2019,S,12,21,0,0,0)},{id:11,title:"Birthday Party",start:new Date(2019,S,13,7,0,0),end:new Date(2019,S,13,10,30,0)},{id:12,title:"Late Night Event",start:new Date(2019,S,17,19,30,0),end:new Date(2019,S,18,2,0,0)},{id:12.5,title:"Late Same Night Event",start:new Date(2019,S,17,19,30,0),end:new Date(2019,S,17,23,30,0)},{id:13,title:"Multi-day Event",start:new Date(2019,S,20,19,30,0),end:new Date(2019,S,22,2,0,0),bgcolor:"purple"},{id:14,title:"Today",start:new Date((new Date).setHours(16)),end:new Date((new Date).setHours(18))}];n(315);f.a.locale(navigator.language,{week:{dow:1}});var C=h.a.momentLocalizer(f.a),k={timeGutterFormat:"H:mm",agendaTimeFormat:"H:mm",agendaHeaderFormat:function(e,t,n){var a=e.start,l=e.end;return"".concat(n.format(a,"MMMM D")," \u2014 ").concat(n.format(l,"MMMM D"))},dayHeaderFormat:"dddd MMMM Do"},H=E()(h.a),N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).moveEvent=function(t){var n=t.event,a=t.start,l=t.end,o=t.isAllDay,r=e.state.events,s=r.indexOf(n),i=n.allDay;!n.allDay&&o?i=!0:n.allDay&&!o&&(i=!1);var c=Object(m.a)({},n,{start:a,end:l,allDay:i}),d=Object(v.a)(r);d.splice(s,1,c),e.setState({events:d})},e.resizeEvent=function(t){var n=t.event,a=t.start,l=t.end,o=e.state.events.map(function(e){return e.id===n.id?Object(m.a)({},e,{start:a,end:l}):e});e.setState({events:o})},e.selectSlot=function(t){e.setState({isNewEvent:!0}),t.start=t.slots[0],t.end=t.slots[t.slots.length-1],e.openModal(t)},e.selectEvent=function(t){e.setState({isNewEvent:!1}),e.openModal(t)},e.openModal=function(t){var n=t.id?t.id:Date.now();e.setState({modalIsOpen:!0,modalEvent:Object(m.a)({},t,{id:n})})},e.closeModal=function(){e.setState({modalIsOpen:!1})},e.handleModalEventEdit=function(t,n){var a=Object(m.a)({},e.state.modalEvent);a[t]=n,e.setState({modalEvent:a})},e.handleEventSave=function(t){var n=e.state.events.findIndex(function(e){return e.id===t.id});if(n>-1){var a=e.state.events;a[n]=Object(m.a)({},t),e.setState({events:a})}else e.setState({events:[].concat(Object(v.a)(e.state.events),[Object(m.a)({},t)])})},e.handleEventDelete=function(){var t=e.state.events.findIndex(function(t){return t.id===e.state.modalEvent.id});if(t>-1){var n=e.state.events;n.splice(t,1),e.setState({events:n})}},e.state={events:j,modalIsOpen:!1,isNewEvent:!1,modalEvent:{title:"",start:null,end:null,desc:"",id:null}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getEventStyle",value:function(e,t,n,a){var l={},o=(new Date).getDate();return t.getDate()===o?l.backgroundColor="green":t.getDate()<o?l.backgroundColor="red":t.getDate()>o&&(l.backgroundColor="blue"),e.bgcolor&&(l.backgroundColor=e.bgcolor),{style:l}}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,{style:{height:"100vh"},localizer:C,formats:k,events:this.state.events,defaultView:"month",defaultDate:new Date,min:f()("10:00am","H:mma").toDate(),max:f()("09:59pm","H:mma").toDate(),step:60,showMultiDayTimes:!0,onEventDrop:this.moveEvent,resizable:!0,onEventResize:this.resizeEvent,selectable:!0,onSelectEvent:this.selectEvent,onSelectSlot:this.selectSlot,popup:!0,tooltipAccessor:function(e){return e.title},eventPropGetter:this.getEventStyle}),l.a.createElement(M,{modalIsOpen:this.state.modalIsOpen,closeModal:this.closeModal,handleModalEventEdit:this.handleModalEventEdit,modalEvent:this.state.modalEvent,handleEventSave:this.handleEventSave,handleEventDelete:this.handleEventDelete,isNewEvent:this.state.isNewEvent,key:this.state.modalEvent.id}))}}]),t}(a.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,{openModal:this.openModal}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[147,1,2]]]);
//# sourceMappingURL=main.7c3b787c.chunk.js.map