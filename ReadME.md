Learn react from santhosh

Food ordering APP
/*
Header
    - Logo
    - Nav Items
Body
    - Search
    - Resturant COntainer
        - resturant cards
            -name of res
            -cuisines
            -Start Ratings
            - Delivery Time
Footer
    - CopyRight
    - Links
    - Address
    - Contacts
*/


Two types of exports:


-deafult export

export deafault componentName/ Variable

-Named export

export const componentName
import {componenTName} from path



# React Hooks

(Normal JS utility function)
- useState() -  helps to create superpowerful state variables in react
- useEffect()


when ever a state variable changes it re-renders the components


# Two types of routing in web apps

-Client Side Routing(Make a network call we don't reload the web page again and again instead we reload the component in a APP)

-Server Side Routing(make a network call and get all data from server link About us page or something and loads the data again and again)