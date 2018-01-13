import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: "AIzaSyBbyhsX2wOrIW4hrEwaZJXiMGWanM7i0yI",  // it's fine to put that, because there are auth rules in place
  authDomain: "fishesstore.firebaseapp.com",
  databaseURL: "https://fishesstore.firebaseio.com",
});

export default base;
