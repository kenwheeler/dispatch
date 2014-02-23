# dispatch

Global event manager, pub/sub implementation

## Usage

    dispatch.on('newEvent', function(data){
      alert(data.message);
    });

    dispatch.trigger('newEvent', { message: 'Thug Life' });

    dispatch.off('newEvent');

## Demo

[Check it out](http://kenwheeler.github.io/dispatch/)

## Methods

### dispatch.on(Event Name, Callback Method)

Creates new global event binding

#### Params:

* **string** *Event Name*

* **function** *Callback Method*

### dispatch.off(Event Name)

Removes global event binding

#### Params:

* **string** *Event Name*

### dispatch.trigger(Event Name,Data Object)

Triggers global event

#### Params:

* **string** *Event Name*

* **object** *Data Object*