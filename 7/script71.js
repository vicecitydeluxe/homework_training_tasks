small_data = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'
big_data = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'

$("#btn").on("change", function(){
    $('#dataInfo').DataTable().ajax.url(big_data + encodeURIComponent(this.value)).load();
});

function format (d) {
 console.log (d)
  return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
      '<tr>'+
          '<td>Street Address:</td>'+
          '<td>'+d.adress.streetAddress+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>City:</td>'+
          '<td>'+d.adress.city+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>State:</td>'+
          '<td>'+d.adress.state+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>ZIP:</td>'+
          '<td>'+d.adress.zip+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Description:</td>'+
          '<td>'+d.description+'</td>'+
      '</tr>'+
  '</table>';
}

  $(document).ready(function() {
    var table = $('#dataInfo').DataTable( {
        "ajax": {
                    url: small_data,
                    dataSrc: ''
                },
        "columns": [
            {
            "className":      'dt-control',
            "orderable":      false,
            "data":           null,
            "defaultContent": ''
            },
            {data: 'id'},
            {data: 'firstName'},
            {data: 'lastName'},
            {data: 'email'},
            {data: 'phone'}
        ],
        "order": [[1, 'asc']]
    } );
     
  $('#dataInfo').on('click', 'td.dt-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row( tr );

      if ( row.child.isShown() ) {
          row.child.hide();
          tr.removeClass('shown');
      }
      else {
          row.child( format(row.data()) ).show();
          tr.addClass('shown');
      }
  } );
} );