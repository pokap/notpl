# NoTpl

Fast template engine without template

## Quick start

Clone the repo: `git clone git://github.com/pokap/notpl.git`.

## Usage

In your html file :

```html
<div id="container"></div>
```

```javascript
// -------------
// controller

var $tbody = function (tbody) {
  $([["Mark", "Otto"], ["Jacob", "Thornton"]]).each(function (index, value) {
    tbody.noTpl([['tr', [
      ['td', (index + 1)],
      ['td', value[0]],
      ['td', value[1]]
    ]]]);
  });
};

// -------------
// template

$(function(){

  var container = $("#container");

  container.html("");
  container.noTpl([
    ['table', [
      ['thead', [
        ['tr', [
          ['th', '#'],
          ['th', 'First Name'],
          ['th', 'Last Name']
        ]
      ]]],
      ['tbody', $tbody]
    ], {"class": 'table table-striped'}],
    ['form', [
      ['fieldset', [
        ['input', null, {"type": 'text', "placeholder": 'Type something…'}],
        ['button', 'Submit', {"type": 'submit', "class": 'btn'}]
      ]]
    ], {"method": 'POST', "action": '#', 'class': 'form-inline'}]
  ]);

});

```