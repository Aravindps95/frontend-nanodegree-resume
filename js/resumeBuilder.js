var bio = {
	"name" : "Aravind",
	"role" : "Student",
	"contacts" : {
		"ph": "9497354233",
		"facebook" : "aravindsank",
		"email" : "aravindps1995@gmail.com",
		"location" : "Palakkad"
	},
	"biopic" : "images/aravind.jpg",
	"msg" : "There's nothing in this world that you can't do",
	"skills" : ["Acting","Awsomeness","Singing"],
	display : function(){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.ph);
		var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedbiopic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedmsg = HTMLwelcomeMsg.replace("%data%",bio.msg);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$('#header').append(formattedbiopic);
		$('#topContacts').append(formattedmobile);
		$('#topContacts').append(formattedemail);
		$('#topContacts').append(formattedlocation);
		$('#footerContacts').append(formattedmobile);
		$('#footerContacts').append(formattedemail);
		$('#footerContacts').append(formattedlocation);
		$('#header').append(formattedmsg);
		if(bio.skills.length > 0)
		{
			$('#header').append(HTMLskillsStart);
			bio.skills.forEach(function(skills){
				var formattedskill = HTMLskills.replace("%data%",skills);
				$('#skills').append(formattedskill);
			});
		}


}
};

bio.display();

var work = {
	"jobs" : [{
		"employer" : "Infosys Limited",
		"title" : "System Engineer",
		"location" : "Mysore",
		"Dates" : "01:02:2017",
		"Description" : "Not Yet Started Working"
	},
	{
		"employer" : "Mphasys Limited",
		"title" : "System Engineer",
		"location" : "Mumbai",
		"Dates" : "01:02:2017",
		"Description" : "Not Yet Started Working"
	}],
	workdisplay : function(){
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
		var formattedemployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		//$("#main").append(formattedemployer);
		var formattedtitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		//$("#main").append(formattedtitle);
		var formattedemployertitle = formattedemployer + formattedtitle;
		$(".work-entry:last").append(formattedemployertitle);
		var formatteddate = HTMLworkDates.replace("%data%",work.jobs[job].Dates);
		$(".work-entry:last").append(formatteddate);
		var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".location-text:last").append(formattedlocation);
		var formatteddescription = HTMLworkDescription.replace("%data%",work.jobs[job].Description);
		$(".work-entry:last").append(formatteddescription);
		}
		
	}
	
};
work.workdisplay();
var projects= {
	"allprojects": [{
            "title": "jarvis",
            "dates": "30:03:2016",
            "description": "voice Enabled Desktop Controling",
            "images": "images/jarvis.jpeg"
            },
            {
            "title": "Alumni Spotlight",
            "dates": "30:03:2015",
            "description": "Web Development",
            "images": ["images/fry.jpg"]
            }],
     projectsdisplay : function(){
     	$('#projects').append(HTMLprojectStart);
     	for(project in projects.allprojects){
     		var formattedprojectstitle = HTMLprojectTitle.replace("%data%",projects.allprojects[project].title);
     		$('.project-entry:last').append(formattedprojectstitle);
     		var formattedprojectsdates = HTMLprojectDates.replace("%data%",projects.allprojects[project].dates);
     		$('.project-entry:last').append(formattedprojectsdates);
     		var formattedprojectsdescription = HTMLprojectDescription.replace("%data%",projects.allprojects[project].description);
     		$('.project-entry:last').append(formattedprojectsdescription);
     		var formattedprojectsimages = HTMLprojectImage.replace("%data%",projects.allprojects[project].images);
     		$('.project-entry:last').append(formattedprojectsimages);
     		
     	}

     }

     
};
projects.projectsdisplay();
var education = {

	"schools" : [
		{
			"name" : "Govy Engg College,Sreekrishnapuram",
			"major" : ["Computer Science"],
			"location" : "Palakkad",
			"degree" : "B.Tech",
			"dates" : "25:05:2016"
		},
		{
			"name" : "amrita vidyalayam",
			"major" : ["Inforatics Practices"],
			"location" : "Palakkad",
			"degree" : "+2",
			"dates" : "25:03:2012"
		},
		{
			"name" :"bappuji",
			"major" : "General",
			"location" : "Thrissur",
			"degree" : "LP",
			"dates" : "28:09:2002"
		}


		],
	"onlineCourses" : {
	"title" : "Web development",
	"organisation" : "udacity",
	"dates" : "24:09:2016",
	"url" : "http://www.udacity.com/nanodegrees/nd001"},
	educationdisplay : function(){
		$('#education').append(HTMLschoolStart);
		for(school in education.schools)
		{
			var formattedschoolname = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedschooldegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedschooldates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var formattedschoollocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedschoolmajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			var formattedschoolinfo=formattedschoolname + formattedschooldegree + formattedschooldates + formattedschoollocation + formattedschoolmajor;
			
			
			$('.education-entry:last').append(formattedschoolinfo);
		}
		$('#education').append(HTMLschoolStart);
		var formattedonlineHeader = HTMLonlineClasses;
		$(".education-entry:last").append(formattedonlineHeader);
			var formattedonlinetitle = HTMLonlineTitle.replace("%data%",education.onlineCourses.title);
			var formattedorganisation = HTMLonlineSchool.replace("%data%",education.onlineCourses.organisation);
			var formattedonlinedates = HTMLonlineDates.replace("%data%",education.onlineCourses.dates);
			var formattedurl = HTMLonlineURL.replace("%data%",education.onlineCourses.url);
			var formattedonlineinfo = formattedonlinetitle + formattedorganisation + formattedonlinedates + formattedurl;
			$('.education-entry:last').append(formattedonlineinfo);
		
	}
	
};
education.educationdisplay();
$("#mapDiv").append(googleMap);
