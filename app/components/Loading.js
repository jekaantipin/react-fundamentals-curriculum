var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
    container: {
    position: 'fixed',
    width: '100%',
    fontSize: '55px',
    fontWeight: 100
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
};

var Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function(){
    return {
      text: 'Loading',
      speed: 300
    };
  },
  getInitialState: function(){
    this.originalText = this.props.text;
    return {
      text: this.originalText
    };
  },
  componentWillMount: function(){
    var stopper = this.originalText + '...';
    this.interval = setInterval(function(){
      if (this.state.text === stopper){
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }.bind(this), this.props.speed);
  },
  componentWillUnmount: function(){
    clearInterval(this.interval);
  },
  render: function(){
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }
});

module.exports = Loading;