import * as sdpTransform from 'sdp-transform';

var inputElem = document.getElementById("input")
function handleInput() {
    var SDP_Text = inputElem.value;
    var SDP_Object = sdpTransform.parse(SDP_Text);
    // create json tree object
    const tree = JsonView.createTree(SDP_Object);
    // render tree into dom element\
    var view_area = document.querySelector('#json_view_area')
    console.log("rendering tree:", SDP_Object, " to ", view_area)
    view_area.innerHTML = '';
    JsonView.render(tree, view_area);
    JsonView.expandChildren(tree);
}

inputElem.addEventListener("input", handleInput)
handleInput();