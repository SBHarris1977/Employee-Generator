# Employee-Generator

Task was to build a software engineering team generator command line application. The appliction will prompt the user for the manager and then the information about other team members. Once the team is created, the application will create an HTML file.

Per the instructions I had to create separate HTML templates for each role: Manager, Engineer, and Intern. The Main HTML will be a compilation of all templates in one.

Classes were created for each role with the Employee class as the parent. The ohter classes were an extension of the Employee class.

Employee includes: name, id, role, and email
Manager includes: name, id, role, email, and office number
Engineer includes: name, id, role, email, and GitHub link/username
Intern includes: name, id, role, email and school