const ROLE_FEATURES = {
  admin:  ['dashboard', 'settings'],
  viewer: ['dashboard']
};
function createAccessControl(role){
    return function(feature){
        return
        ROLE_FEATURES[role].includes(feature);
    };
}
function showAccessMessage(feature){
    
    const canAccess = this.canAccess;
    const role = this.role;
    if(canAccess){
        console.log(`${role} has access to ${feature} `)
    }
    else{
        console.log(`${role} does NOT have access to ${feature}`)
    }
}
const adminAccess = createAccessControl("admin");
console.log(adminAccess("settings")); // true

const viewer = { role: "viewer", name: "Joe" };
showAccessMessage.call(viewer, "dashboard");  // Viewer has access to dashboard

const viewerMsg = showAccessMessage.bind({ role: "viewer", name: "Joe" });
viewerMsg("settings");                        // Viewer does NOT have access to settings










//Problem 2: User Access Manager
//Objective
//Create a reusable access-control system using closures and function methods to simulate different user roles//.

//Requirements
//Define the role/feature matrix inside the file:

//const ROLE_FEATURES = {
  ///admin:  ['dashboard', 'settings'],
  //viewer: ['dashboard']
//};

//Implement createAccessControl(role)

//Returns canAccess(feature) that closes over role and consults ROLE_FEATURES.
//Implement showAccessMessage(feature) that logs

//"Admin has access to dashboard" or

//"Viewer does NOT have access to settings"

//Use .call(thisArg, feature) so this.role is provided dynamically.

//Show one .bind() example that produces a pre-bound function for a particular user.

//Sample Usage
//const adminAccess = createAccessControl("admin");
//console.log(adminAccess("settings")); // true

//const viewer = { role: "viewer", name: "Joe" };
//showAccessMessage.call(viewer, "dashboard");  // Viewer has access to dashboard

//const viewerMsg = showAccessMessage.bind({ role: "viewer", name: "Joe" });
//viewerMsg("settings");                        // Viewer does NOT have access to settings
