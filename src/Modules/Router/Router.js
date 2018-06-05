import Backbone from 'backbone';
import Navigation from '../Navigation/Navigation';

class Router extends Backbone.Router {

    constructor () {
        super();

        Backbone.history.start();

        this.navigation = new Navigation();

        this.route('', 'dashboard', function(){
            this.navigation.navigateTo('dashboard');
        });

        this.route('notes', 'notes', function(){
            this.navigation.navigateTo('notes');
        });
    }

}

export default Router;
