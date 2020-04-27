({
	doAdd : function(component, event, helper) {
		var num1 = component.get('v.input1');
        var num2 = component.get('v.input2');
        //alert(parseInt(num1) + parseInt(num2));
        component.set('v.outPut',parseInt(num1) + parseInt(num2));
	},
    
    doSubtract : function(component, event, helper) {
		var num1 = component.get('v.input1');
        var num2 = component.get('v.input2');
        //alert(num1 - num2);
        component.set('v.outPut',parseInt(num1) - parseInt(num2));
	},
    
    doMultiply : function(component, event, helper) {
		var num1 = component.get('v.input1');
        var num2 = component.get('v.input2');
        //alert(num1 * num2);
        component.set('v.outPut',parseInt(num1) * parseInt(num2));
	},
    
    doDivide : function(component, event, helper) {
		var num1 = component.get('v.input1');
        var num2 = component.get('v.input2');
        //alert(num1 / num2);
        component.set('v.outPut',parseInt(num1) / parseInt(num2));
	}
})
