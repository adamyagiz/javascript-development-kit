/* This fils contains references to the vendor libs
  we use in the project. This file is used by webpack
  in the production build ONLY. A separate bundle for
  vendor code is useful since it's unlikely to change
  as often as the application's code. So all libs we
  reference here will be written to vendor.js so they
  can be cached until one of them changes. Basically,
  this avoids users having to download a huge JS file
  any time a line of code changes. They only download
  vendor.js when a vendor lib changes. Any files NOT
  referenced here will be bundled into main.js for
  the production build.
 */

/* eslint-disable no-unused-vars */
import fetch from 'whatwg-fetch';
