var checkbox = document.getElementById('myCheckbox');
checkbox.addEventListener('change', function() {
  if (this.checked) {
    alert('Checkbox is checked!');
  
  } else {
    alert('Checkbox is unchecked!');
  
  }
});

function showOrHide() 
{
  var div = document.getElementById("showorhide");
  if (div.style.display == "block") 
  {
      div.style.display = "none";
  }
  else 
  {
      div.style.display = "block";
  }
};
function Availability() 
{
  var div = document.getElementById("Availability");
  if (div.style.display == "block") 
  {
      div.style.display = "none";
  }
  else 
  {
      div.style.display = "block";
  }
};
function Product() 
{
  var div = document.getElementById("Product");
  if (div.style.display == "block") 
  {
      div.style.display = "none";
  }
  else 
  {
      div.style.display = "block";
  }
};