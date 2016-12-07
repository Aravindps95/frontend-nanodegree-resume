var bio = {
    "name": "Aravind",
    "role": "Student",
    "contacts": {
        "mobile": "9497354233",
        "email": "aravindps1995@gmail.com",
        "github": "https://github.com/Aravindps95",
        "location": "Palakkad"
    },
    "welcomeMessage": "There's nothing in this world that you can't Achieve",
    "biopic": "images/aravindps.jpg",
    "skills": ["programming", "Acting", "Awsomeness", "Singing"],
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $('#header').append(formattedbiopic);
        $('#topContacts').append(formattedmobile);
        $('#topContacts').append(formattedemail);
        $('#topContacts').append(formattedgithub);
        $('#topContacts').append(formattedlocation);
        $('#footerContacts').append(formattedmobile);
        $('#footerContacts').append(formattedemail);
        $('#footerContacts').append(formattedgithub);
        $('#footerContacts').append(formattedlocation);
        $('#header').append(formattedmsg);
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            bio.skills.forEach(function(skills) {
                var formattedskill = HTMLskills.replace("%data%", skills);
                $('#skills').append(formattedskill);
            });
        }
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Infosys Limited",
        "title": "System Engineer",
        "location": "Mysore",
        "dates": "01:02:2017",
        "description": "Not Yet Started Working"
    }, {
        "employer": "Mphasis Limited",
        "title": "System Engineer",
        "location": "Mangalore",
        "dates": "01:02:2017",
        "description": "Not Yet Started Working"
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedemployer = HTMLworkEmployer.replace("%data%", job.employer);
            //$("#main").append(formattedemployer);
            var formattedtitle = HTMLworkTitle.replace("%data%", job.title);
            //$("#main").append(formattedtitle);
            var formattedemployertitle = formattedemployer + formattedtitle;
            $(".work-entry:last").append(formattedemployertitle);
            var formatteddate = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formatteddate);
            var formattedlocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedlocation);
            var formatteddescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formatteddescription);
        });
    }
};
work.display();
var projects = {
    "projects": [{
        "title": "jarvis",
        "dates": "30:03:2016",
        "description": "voice Enabled Desktop Controling",
        "images": ["images/jarvis.jpeg"]
    }, {
        "title": "Alumni Spotlight",
        "dates": "30:03:2015",
        "description": "Web Development",
        "images": ["images/alumni.jpg"]
    }],
    display: function() {
        $('#projects').append(HTMLprojectStart);
        projects.projects.forEach(function(project) {
            var formattedprojectstitle = HTMLprojectTitle.replace("%data%", project.title);
            $('.project-entry:last').append(formattedprojectstitle);
            var formattedprojectsdates = HTMLprojectDates.replace("%data%", project.dates);
            $('.project-entry:last').append(formattedprojectsdates);
            var formattedprojectsdescription = HTMLprojectDescription.replace("%data%", project.description);
            $('.project-entry:last').append(formattedprojectsdescription);
            project.images.forEach(function(image) {
                var formattedprojectsimages = HTMLprojectImage.replace("%data%", image);
                $('.project-entry:last').append(formattedprojectsimages);
            });
        });
    }
};
projects.display();
var education = {
    "schools": [{
        "name": "Govy Engg College,Sreekrishnapuram",
        "location": "Palakkad",
        "degree": "B.Tech",
        "majors": ["Computer Science"],
        "dates": "25:05:2016",
        "url": "http://www.gecskp.ac.in/"
    }, {
        "name": "amrita vidyalayam",
        "location": "Palakkad",
        "degree": "+2",
        "majors": ["Inforatics Practices"],
        "dates": "25:03:2012",
        "url": "http://plkd.amritavidyalayam.org/"
    }, {
        "name": "bappuji",
        "location": "Thrissur",
        "degree": "LP",
        "majors": ["General"],
        "dates": "28:09:2002",
        "url": "http://www.icbse.com/schools/bappuji-english-medium-school/32061000113"
    }],
    "onlineCourses": [{
        "title": "Web development",
        "school": "udacity",
        "dates": "24:09:2016",
        "url": "http://www.udacity.com/nanodegrees/nd001"
    }]
};

function displayschool() {
    $('#education').append(HTMLschoolStart);
    education.schools.forEach(function(school) {
        var formattedschoolname = HTMLschoolName.replace("%data%", school.name);
        var formattedschoolURL = HTMLschoolURL.replace("%data%", school.url);
        var formattedschooldegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschooldates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedschoollocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedschoolmajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedschoolinfo = formattedschoolname + formattedschooldegree + formattedschooldates + formattedschoollocation + formattedschoolmajor + formattedschoolURL;
        $('.education-entry:last').append(formattedschoolinfo);
    });
}
displayschool();

function displayonline() {
    var formattedonlineHeader = HTMLonlineClasses;
    $(".education-entry:last").append(formattedonlineHeader);
    education.onlineCourses.forEach(function(course) {
        $('#education').append(HTMLschoolStart);
        var formattedonlinetitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedorganisation = HTMLonlineSchool.replace("%data%", course.school);
        var formattedonlinedates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedurl = HTMLonlineURL.replace("%data%", course.url);
        var formattedonlineinfo = formattedonlinetitle + formattedorganisation + formattedonlinedates + formattedurl;
        $('.education-entry:last').append(formattedonlineinfo);
    });
}
displayonline();

$("#mapDiv").append(googleMap);
