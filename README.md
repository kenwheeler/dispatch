# avent

Global event manager, pub/sub implementation

## Usage

    avent.on('newEvent', function(data){
      alert(data.message);
    });

    avent.trigger('newEvent', { message: 'Thug Life' });

    avent.off('newEvent');

## Methods

### avent.on(Event Name, Callback Method)

Creates new global event binding

#### Params:

* **string** *Event Name*

* **function** *Callback Method*

### avent.off(Event Name)

Removes global event binding

#### Params:

* **string** *Event Name*

### avent.trigger(Event Name,Data Object)

Triggers global event

#### Params:

* **string** *Event Name*

* **object** *Data Object*