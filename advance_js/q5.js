function show(msg1,msg2,cb){
    msg3="hello";
		console.log(msg1+" "+msg2);
    cb(msg3,msg2);
	}

show("my name is ","sameer",function(a,b){ // outer callback method

    console.log(a+" "+b);

    setTimeout(function(){                   //inner callback method

      console.log('thanks for waiting '+b);

    },3000)

});
