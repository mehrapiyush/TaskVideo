// var socket = io.connect("http://localhost:4000");

// var message=document.getElementById('message');
// var handle=document.getElementById('handle');
// var btn=document.getElementById('send');
// var output=document.getElementById('output');
// var feedback=document.getElementById('feedback');

// btn.addEventListener("click",function(){
// socket.emit("chat",{
// 	message: message.value,
// 	handle: handle.value
// });
// });

// message.addEventListener('keypress',function(){
// socket.emit('typing',handle.value)
// });

// socket.on('chat',function(data){
// output.innerHTML+='<p><strong>'+data.handle + ':</strong>'+" "+data.message
// });

// socket.on('typing',function(data){
// feedback.innerHTML = '<p><em>'+ data+'is typing s mdg</p>'
// });

class ChatClient{
	constructor(socket,room_id,name){
		this.socket=socket;
		this.room_id=room_id;
		this.name=name;
		this.startchat(socket,room_id,name);
	}

	async startchat(socket,room_id,name){
		var message=document.getElementById('message');
		var handle=document.getElementById('handle');
		var btn=document.getElementById('send');
		var output=document.getElementById('output');
		var feedback=document.getElementById('feedback');

		btn.addEventListener("click",function(){
			socket.emit("chat",{
				message: message.value,
				handle: handle.value,
				room_id: room_id
			});
			message.value = "";
		});

		message.addEventListener('keypress',function(){
			socket.emit('typing',{handle: handle.value,
			room_id:room_id})
		});

		socket.on('chat',function(data){
			feedback.innerHTML = '';
			output.innerHTML+='<p><strong>'+data.handle + ':</strong>'+" "+data.message
		});

		socket.on('typing',function(data){
			feedback.innerHTML = '<p><em>'+ data.handle+'is typing s mdg</p>'
		});
	} 

}