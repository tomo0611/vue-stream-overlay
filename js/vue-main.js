let POLL_INTERVAL = 2500;
let JSON_PATH = './sample.json';

let app = new Vue({
  el: '#app',
  data: {
    show: true,
    info: {}
  },
  methods: {
    async loadJSON(filePath) {
      const resp = await axios.get(filePath, { responseType: 'json' });
      this.info = resp.data;
      if(resp.data.show == "true"){
        this.show = true;
      }else{
        this.show = false;
      }

    }
  },
  // Triggered when the vue instance is created, triggers the initial load.
  created: function() {
    this.loadJSON(JSON_PATH);
    setInterval(() => { this.loadJSON(JSON_PATH); }, POLL_INTERVAL);
  }

});
