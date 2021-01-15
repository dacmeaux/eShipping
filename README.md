# eShipping
GM Interview Technical Exercise for Frontend Web Developer

__Overview__

Owner of major shipping company wants to be able to track the location and charge of copmanies electric vehicle fleet at all time. Client desires to see vehicle locations and charges on a map.

__Solution__

Build a simple admin interface using VueJS, BootStrap, and Google Map Geolocation API that will simulate login, fetching data, and display results on a map.

__Features__

- Simulated login (form checking intentionally left out)
- Simulated data fetching for geolocation data and vehicle charge status
- Multi-view interface: ability to toggle list and map views
- Map shows droppin, vehicle id, and a detail tooltip (onclick) with destination and charge status

__Operation__

- User must first login
- Next user is presented with a "Get Location" button. This is to simulte data fetcing in a simple way. Ideally the user would be presented with a dashboard of some type.
- Once data is fetched the user is presented with a default list view that displays the vehicle id, the destination address, and the battery status.
  - the user has the option to click the "View Map" button to see vehicles on a map
  - each vehicle's position is shown as a drop pin 📍 with the vehicle id and the user can see more details about the vhicle by clicking on the drop pin.
  
__Omissions/Enhancements__

- Applicaton would be secured with proper authentication
- Real-time data fetching at small intervals to show movement of vehicles on a map
- Time and distance to destination
- Distance to nearest charging stations
