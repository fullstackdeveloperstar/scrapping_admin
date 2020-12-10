<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
      <small>Control panel</small>
    </h1>
  </section>

  <section class="content">
    <div class="row">
      <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-aqua">
          <div class="inner">
            <h3>150</h3>
            <p>New Tasks</p>
          </div>
          <div class="icon">
            <i class="ion ion-bag"></i>
          </div>
          <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </div><!-- ./col -->
      <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-green">
          <div class="inner">
            <h3>53<sup style="font-size: 20px">%</sup></h3>
            <p>Completed Tasks</p>
          </div>
          <div class="icon">
            <i class="ion ion-stats-bars"></i>
          </div>
          <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </div><!-- ./col -->
      <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-yellow">
          <div class="inner">
            <h3>44</h3>
            <p>New User</p>
          </div>
          <div class="icon">
            <i class="ion ion-person-add"></i>
          </div>
          <a href="<?php echo base_url(); ?>userListing" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </div><!-- ./col -->
      <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-red">
          <div class="inner">
            <h3>65</h3>
            <p>Reopened Issue</p>
          </div>
          <div class="icon">
            <i class="ion ion-pie-graph"></i>
          </div>
          <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </div><!-- ./col -->
    </div>

    <div class="row">
      <div class="col-lg-12">
        <table id="iframetable" class="display" style="width:100%">
          <thead>
            <tr>
              <th>Filtered by</th>
              <th>Image1</th>
              <th>Image2</th>
              <th>LifestyleCTA</th>
              <th>Segmentname</th>
              <th>LifestyleCopyMain</th>
              <th>Logo2</th>

            </tr>
          </thead>
          <tfoot>
            <tr>

              <th>Filtered by</th>
              <th>Image1</th>
              <th>Image2</th>
              <th>LifestyleCTA</th>
              <th>Segmentname</th>
              <th>LifestyleCopyMain</th>
              <th>Logo2</th>
            </tr>
          </tfoot>
        </table>

      </div>
      <div class="col-lg-12" style="margin-top: 50px;">
        <table id="sheettable" class="display" style="width:100%">
          <thead>
            <tr>
              <th>UniqueId</th>
              <th>Startdate</th>
              <th>Enddate</th>
              <th>ReportingCustom1</th>
              <th>Active</th>
              <th>Division</th>
              <th>Segmentname</th>
              <th>Modelname</th>
              <th>LifestyleCopyMain</th>
              <th>LifestyleCopySub</th>
              <th>LifestyleCTA</th>
              <th>ProductionCopyMain</th>
              <th>ProductCopySub</th>
              <th>ProductCTA</th>
              <th>ExitUrl</th>
            </tr>
          </thead>
          <tbody>
            <?php
            foreach ($values as $row) {
            ?>
              <tr>
                <td>
                  <?=$row[0]?>
                </td>
                <td>
                  <?=$row[1]?>
                </td>
                <td>
                  <?=$row[2]?>
                </td>
                <td>
                  <?=$row[3]?>
                </td>
                <td>
                  <?=$row[4]?>
                </td>
                <td>
                  <?=$row[5]?>
                </td>
                <td>
                  <?=$row[6]?>
                </td>
                <td>
                  <?=$row[7]?>
                </td>
                <td>
                  <?=$row[8]?>
                </td>
                <td>
                  <?=$row[9]?>
                </td>
                <td>
                  <?=$row[10]?>
                </td>
                <td>
                  <?=$row[11]?>
                </td>
                <td>
                  <?=$row[12]?>
                </td>
                <td>
                  <?=$row[13]?>
                </td>
                <td>
                  <?=$row[14]?>
                </td>
              </tr>
            <?php
            }
            ?>
          </tbody>
          <tfoot>
            <tr>

            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  </section>
</div>
<script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
<link href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css" />
<script>
  $.ajax({
    url: 'http://localhost:3030/api/v1/scrapping',
    type: 'GET',
    success: function(res) {
      console.log(res);
    }
  });

  $('#iframetable').DataTable({
    "processing": true,
    "ajax": "http://54.193.250.208:3030/api/v1/scrapping",
    "columns": [{
        "data": "Samsung_DCO_2020_data.0.UniqueID"
      },
      {
        "data": "Samsung_DCO_2020_data.0.LifestyleBackground.Url",
        render: function(cellData) {
          return '<img src="' + cellData + '" style="width: 100px;">'
        }
      },
      {
        "data": "Samsung_DCO_2020_data.0.ProductBackground.Url",
        render: function(cellData) {
          return '<img src="' + cellData + '" style="width: 100px;">'
        }
      },
      {
        "data": "Samsung_DCO_2020_data.0.LifestyleCTA"
      },

      {
        "data": "Samsung_DCO_2020_data.0.Segmentname"
      },
      {
        "data": "Samsung_DCO_2020_data.0.LifestyleCopyMain"
      },
      {
        "data": "Samsung_DCO_2020_data.0.Logo2.Url",
        render: function(cellData) {
          return '<img src="' + cellData + '" style="width: 50px;">'
        }
      },

    ]
  });

  $("#sheettable").DataTable({"scrollX": true});
</script>