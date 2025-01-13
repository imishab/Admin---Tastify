import feather from "feather-icons";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {

  useEffect(() => {
    feather.replace(); // Initialize feather icons
  }, []);

  return (
    <Html lang="en">
      <>
        <Head>
          {/* <meta charSet="utf-8" />
          <title>Dashboard | Tapeli - Responsive Admin Dashboard Template</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="A fully featured admin theme which can be used to build CRM, CMS, etc."
          />
          <meta name="author" content="Zoyothemes" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> */}
          {/* App favicon */}
          <link rel="shortcut icon" href="../../assets/images/favicon.ico" />
          {/* App css */}
          <link
            href="../../assets/css/app.min.css"
            rel="stylesheet"
            type="text/css"
            id="app-style"
          />
          {/* Icons */}
          <link href="../../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
          <link href="../../assets/css/custom.css" rel="stylesheet" type="text/css" />
          <link href="../../assets/libs/datatables.net-bs5/css/dataTables.bootstrap5.min.css" rel="stylesheet" type="text/css" />

          <link href="../../assets/libs/datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css" rel="stylesheet" type="text/css" />
          <link href="../../assets/libs/datatables.net-keytable-bs5/css/keyTable.bootstrap5.min.css" rel="stylesheet" type="text/css" />
          <link href="../../assets/libs/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css" rel="stylesheet" type="text/css" />
          <link href="../../assets/libs/datatables.net-select-bs5/css/select.bootstrap5.min.css" rel="stylesheet" type="text/css" />
        </Head>
      </>


      <body data-menu-color="light" data-sidebar="default">
        <Main />
        <NextScript />

        <script src="../../assets/libs/jquery/jquery.min.js"></script>
        <script src="../../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../../assets/libs/simplebar/simplebar.min.js"></script>
        <script src="../../assets/libs/node-waves/waves.min.js"></script>
        <script src="../../assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
        <script src="../../assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
        <script src="../../assets/libs/feather-icons/feather.min.js"></script>

        <script src="../../assets/libs/apexcharts/apexcharts.min.js"></script>

        <script src="https://apexcharts.com/samples/assets/stock-prices.js"></script>

        <script src="../../assets/js/pages/analytics-dashboard.init.js"></script>

        <script src="../../assets/js/app.js"></script>


        <script src="../../assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>

        <script src="../../assets/libs/datatables.net-bs5/js/dataTables.bootstrap5.min.js"></script>
        <script src="../../assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
        <script src="../../assets/libs/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
        <script src="../../assets/libs/datatables.net-keytable-bs5/js/keyTable.bootstrap5.min.js"></script>




        <script src="../../assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
        <script src="../../assets/libs/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js"></script>


        <script src="../../assets/libs/datatables.net-select/js/dataTables.select.min.js"></script>
        <script src="../../assets/libs/datatables.net-select-bs5/js/select.bootstrap5.min.js"></script>

        <script src="../../assets/js/pages/datatable.init.js"></script>

      </body>
    </Html>
  );
}
