pragma solidity ^0.8.3;


contract Main {
    
    uint numEvents; 
    
    
    mapping(uint => Event) public events; 
    
    
    struct Event {
         string name;
         string date;
         string location;
         bool streamed;
         address eventOwner; 
    }
    

    function makeEvent(string memory _name, string memory _date, string memory _location, bool _streamed) public returns(uint eventID){
        eventID = numEvents++; 
        Event storage newEvent = events[eventID];
        newEvent.name = _name;
        newEvent.date = _date;
        newEvent.location = _location;
        newEvent.streamed = _streamed;
        newEvent.eventOwner = msg.sender; 
        
    }
    
    
    
    
}