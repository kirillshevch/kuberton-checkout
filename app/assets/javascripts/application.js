//= require rails-ujs
//= require_tree .
//= require vue2.js

new Vue({
  el: '#app',
  data: {
    order : window.current_order,
  },
  template : `<div class='container'>
    <div class='mt-sm-3 mb-sm-3'>
      <h4>Order Summary</h4>
    </div>
    <table class='table'>
      <thead class="thead-dark">
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
          <td>Qty</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='l in (order || {}).line_items'>
          <td>
            <img :src='l.product.image' style='width: 30px' alt='' />
          </td>
          <td>
            {{ l.product.name }}
          </td>
          <td>
            {{ l.product.price }}$
          </td>
          <td>
            x {{ l.quantity }}
          </td>
          <td>
            <b>
              {{ l.product.price * l.quantity }}$
            </b>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan='4'></td>
          <td>
            <b>
             {{ total() }}$
            </b>
          </td>
        </tr>
      </tfoot>
    </table>
    <div class='mt-sm-3 mb-sm-3'>
      <h4>Secure checkout</h4>
    </div>
    <div class='row'>
      <iframe width='500' height='280' style='border: none' src='/card'></iframe>
    </div>
  </div>`,
  methods: {
    total () {
      return ((this.order || {}).line_items || []).map((l) => l.product && l.product.price ? l.product.price * l.quantity : 0).reduce((a, b) => a + b, 0);
    }
  }
});

