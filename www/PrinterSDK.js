var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "PrinterSDK", "coolMethod", [arg0]);
};

var pluginName = "PrinterSDK";
var btPlugin = {
scanPrinters: function(successCallback, errorCallback){
    cordova.exec(successCallback, errorCallback, pluginName, "scanPrintersWithCompletion")
},
    
stopScanPrinters: function(successCallback, errorCallback){
    cordova.exec(successCallback, errorCallback, pluginName, "stopScanPrinters")
},
    
connectBT: function(successCallback, errorCallback, params){
    cordova.exec(callback, function(err){alert(err)}, pluginName, "connectBT", [params])
},
    
disconnect: function(successCallback, errorCallback){
    cordova.exec(successCallback, errorCallback, pluginName, "disconnect")
},
    
printText: function(successCallback, errorCallback, params){
    cordova.exec(csuccessCallback, errorCallback, pluginName, "printText", [params])
},
    
cutPaper: function(successCallback, errorCallback){
    cordova.exec(successCallback, errorCallback, pluginName, "cutPaper")
},
    
printTestPaper: function(successCallback, errorCallback){
    cordova.exec(successCallback, errorCallback, pluginName, "printTestPaper")
},
};
