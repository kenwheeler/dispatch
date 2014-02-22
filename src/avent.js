/**
* @name avent
* @namespace
*/
(function(avent){

  /** Creates an element to bind global events to */
  avent.global = document.createElement('avent');

  /** Creates an object to store event data in */
  avent.events = {};

  /**
  * Creates new global event binding
  *
  * @public
  * @name avent#on
  * @function
  * @param {string} Event Name
  * @param {function} Callback Method
  */
  avent.on = function(event, fn){
    // Creates object to store event data in
    var e = {
      ev: new Event(event),
      fnc: fn,
    };

    /// Adds event object to global event array
    avent.events[event] = e;

    // Identifies correct binding method and applies event
    if (avent.global.addEventListener) {
        avent.global.addEventListener(event, fn, false);
    } else {
        avent.global.attachEvent(event, function() {
            return(fn.call(avent.global, window.event));
        });
    }
  };

  /**
  * Removes global event binding
  *
  * @public
  * @name avent#off
  * @function
  * @param {string} Event Name
  */
  avent.off = function(event){
    // Identifies correct binding method and removes event
    if (avent.global.removeEventListener) {
        avent.global.removeEventListener(
          avent.events[event].ev.type,
          avent.events[event].fnc
        );
    } else {
        avent.global.detachEvent(
          avent.events[event].ev.type,
          avent.events[event].fnc
        );
    }
    // Remove event from global event object
    delete avent.events[event];
  };

  /**
  * Triggers global event
  *
  * @public
  * @name avent#trigger
  * @function
  * @param {string} Event Name
  */
  avent.trigger = function(event){
    // Identifies correct trigger method and triggers event
    if (avent.global.addEventListener) {
      avent.global.dispatchEvent(avent.events[event].ev);
    } else {
      avent.global.fireEvent(avent.events[event].ev);
    }
  }

  // Return avent object
  return avent;

})(window.avent = window.avent || {});