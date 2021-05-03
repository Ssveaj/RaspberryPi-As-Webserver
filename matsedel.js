$.ajax({  
    headers: {'Access-Control-Allow-Origin': '*' },
    type: 'GET',  
    url: "https://api.rss2json.com/v1/api.json?rss_url=" + 'https://skolmaten.se/tullangsgymnasiet/rss/weeks/?limit=1',
    dataType: 'jsonp', 
    success: function(e) {  
            
    let mat = '';   
    let borderBtm = 'style="border-bottom: solid 2px #3D3D3D"';
    let d = new Date();
    let weektoday = d.getDay();
    
    mat += '    <div class="row">';
    mat += '       <div class="col-md-12 d-flex align-items-center d-flex justify-content-center" style="background-color: #D9D9D9; color: black; font-size: 15px;"' + borderBtm + '>';
    mat +=            e.feed.title + ' - ' + e.items[0].title.slice(-8);
    mat += '       </div>';
    mat += '    </div>';

    $.each(e.items, function(key, value) {
    
    let today = (weektoday == key+1) ? 'today' : '';
   

    mat += '    <div class="row ' + today + '">';
    mat += '       <div class="col-md-2 d-flex align-items-center d-flex justify-content-center">';
    mat +=            value.title.slice(0, -10);
    mat += '       </div>';
    mat += '       <div class="col-md-10 d-flex align-items-center" id="swipeRight">';
    mat +=             value.description;
    mat += '       </div>';
    mat += '    </div>';
   
 })
  
$('#showMatSedel').html(mat);

let swiperight = document.getElementById('swipeRight');
swiperight.addEventListener('click', function() {
  document.location.href = '/';
});


    }  
}); 

