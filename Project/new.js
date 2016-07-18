var ob=function(str){
   this.name=str;
};
ob.prototype.isEmpty=function () {
    if(this.name.length>0)
        return false;
    else
        return true;
};
    function show() {
        var john=new ob(document.getElementById('text1').value);
        var name=new ob("hello");
        alert(john.isEmpty());
        alert(name.isEmpty());
    }

