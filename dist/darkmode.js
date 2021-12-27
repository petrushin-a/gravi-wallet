/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
 function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }

//** Experimental dark mode */

addStyle(`
  body {
        background-color: #211f2c;
        color:#c7c7c7;
    }
`)

addStyle(`
    .bg-light {
        background-color: #272534 !important;
    }
`)

addStyle(`
    .navbar-light .navbar-brand {
        color: rgb(183 183 183 / 90%);
    }
    .navbar-light .navbar-brand:hover {
        color: #fff !important;
    }
`)

addStyle(`
    .navbar-light .navbar-nav .nav-link {
        color: rgb(249 249 249 / 55%);
    }
`)
addStyle(`
    .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
        color: rgb(255 255 255 / 90%);
    }
    .navbar-light .nav-link:hover {
        color: #fff !important;
    }
`)
addStyle(`
    th {
        color: #c5c5c5;
    }
`)
addStyle(`
table.dataTable tbody tr {
    background-color: #2e2e32;
    color: white;
}
`)
addStyle(`
    .card-header:first-child {
        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }
`)
addStyle(`
.card-header {
    background-color: #343244;
}
`)
addStyle(`
.card-body {
    background-color: #312f38;
}
`)
addStyle(`
    tr {
        color: #c7c7c7;
    }
`)
addStyle(`
    #tw {
        background-color:#ddd;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }
`)
addStyle(`
    .dataTables_wrapper .dataTables_length {
        color: #c7c7c7;
    }
`)
addStyle(`
    select, input {
        background-color: #ddd !important;
    }
    label {
        color: #c7c7c7 !important;
    }
`)
addStyle(`
    #totalProfit {
        background-color:#8761a5 !important;
    }
`)
addStyle(`
    a {
        color: #95a7c1;
        transition: all .2s ease;
    }
    a:hover {
        color: #deebfd;

    }
`)
addStyle(`
    .border-light {
        border-color: #7bbdff!important;
    }
    .input-group-text {
       
        border: 1px solid #7bbdff!importants;
        border-bottom-ledft-radius:0;
        border-bottom-right-radius:0;
    }
`)
addStyle(`
    .bg-success {
        background-color: #56a17e!important;
    }
    .btn-primary {
        background-color: #1b3964 !important;
        transition: all .2s ease;
    }
    .btn-primary:hover {
        background-color: #37598d !important;
    }
`)


