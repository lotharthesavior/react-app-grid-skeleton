import Reflux from 'reflux';
import NavigationActions from '../Actions/NavigationActions';

class NavigationStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.state = {page:'dashboard'};
        this.listenables = NavigationActions;
    }

    onGoDashboard()
    {
        this.setState({page:'dashboard'});
    }

    onGoNotes()
    {
        console.log('--------------');
        this.setState({page:'notes'});
    }
}

export default NavigationStore;