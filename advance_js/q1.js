
function submitform(){

	var fn=document.getElementById('fn').value;
	var ln=document.getElementById('ln').value;
	var con=document.getElementById('con').value;
	var dob=document.getElementById('db').value;

	var name_reg=/^[a-zA-z]+$/;
	var contact_reg =/^[0-9]{10}$/;
	var dob_reg=/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;

	try {
					if(fn=='' || ln=='' || con=='' || dob=='' )
						throw " All fields are mandatory ";

					if(!(name_reg.test(fn)))
						throw " Invalid input for FirstName";

					if(!(name_reg.test(ln)))
					 throw " Invalid input for LasttName";

					if(!(contact_reg.test(con)))
						throw " Invalid input for Contact";

					if(!(dob_reg.test(dob)))
						throw " Invalid Date Entered ";

					alert("Submission Successfull !! ");

			  }

	      catch(err)
	      {
	      	alert(err);
	      }
}
