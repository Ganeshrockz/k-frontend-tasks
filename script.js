function display(val)
{
  var i,ul,li;
  ul=document.getElementById("phonelist");
  li=ul.getElementsByTagName("li");
  for(i=0;i<li.length;i++)
  {
    if(li[i].id===val)
    {
      li[i].style.display="block";
    }
    else {
      li[i].style.display="none";
    }
  }
  }
  function displayAll()
  {
    var i,ul,li;
    ul=document.getElementById("phonelist");
    li=ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++)
    {
        li[i].style.display="block";
    }
  }
  function displayRAM(val)
  {
    var i,ul,li;
    ul=document.getElementById("phonelist");
    li=ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++)
    {
      ans=parseInt(li[i].value);
      val=parseInt(val);
      if(ans>val)
      {
        li[i].style.display="block";
      }
      else {
        li[i].style.display="none";
      }

    }
  }
  function displayCost(val)
  {
    var i,ul,li;
    ul=document.getElementById("phonelist");
    li=ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++)
    {
      head=li[i].getElementsByTagName("h3");
      ans=parseInt(head[0].id);
      val=parseInt(val);
      if(ans>val)
      {
        li[i].style.display="block";
      }
      else {
        li[i].style.display="none";
      }

    }
  }
