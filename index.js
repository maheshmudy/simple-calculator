function bclick (val)
        {
            document.getElementById("display").value+=val;
        }
        function displayClear()
        {
            document.getElementById("display").value="";
        }
        function eclick()
        {
            var text=document.getElementById("display").value ;
            var result=eval(text);
            document.getElementById("display").value=result;
        }