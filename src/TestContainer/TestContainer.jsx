import { Component1, Component2 } from './components';

class TestContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleExternalEvent = this.handleExternalEvent.bind(this);

		this.state = {
			count: 1
		}
	}

	componentDidMount() {
        window.addEventListener('handleExternalEvent', this.handleExternalEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('handleExternalEvent', this.handleExternalEvent);
    }

	handleExternalEvent() {
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return <div>
			<Component1 />
			<Component2 />
			<p>
				Test Container has count {this.state.count}
			</p>	
		</div>
	}
}

const el = document.getElementById('TestContainer');
if (el) {
    ReactDOM.render(<TestContainer/>, el);
}
