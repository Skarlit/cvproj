import React from "react";
import Reflux from "reflux";
import {Icon} from "../../constants.js";
import AppStateStore from "../../stores/app_state.js";
import Radium from "radium";
import {setLang} from "../../actions.js";
import mui from "material-ui";
import ThemeMixin from "../../mixin/global_theme.js";

var DropDownMenu = mui.DropDownMenu;

var  LangBtn = React.createClass({
    mixins: [Reflux.listenTo(AppStateStore, "onLangChanged"), ThemeMixin],
    onLangChanged: function(lang) {
        this.state.lang != lang && this.setState({lang: lang})
    },
    getInitialState: function() {
        return {lang: AppStateStore.getLang(), allLang: [{payload: "en", text: "English"}, {payload: "jp", text: "日本語"}]}
    },
    setLang: function(e, selectedIndex, menuItem) {
      setLang(menuItem.payload);
    },
    render: function() {
        var selectedIndex = 0;
        for(var i = 0; i < this.state.allLang.length; i++){
            if (this.state.lang == this.state.allLang[i]) {
                selectedIndex = i;
                break;
            }
        }
        return <div style={styles.wrapper}>
            <DropDownMenu menuItems={this.state.allLang}
                          style={{fontSize: "13px"}}
                          menuItemStyle={{fontSize: "13px"}}
                          onChange={this.setLang}
                          selectedIndex={selectedIndex}
                          underlineStyle={{border: "none"}} />
        </div>
    }
});


var styles = {
    wrapper: {
        position: "relative",
        boxSizing: "border-box",
        top: 0,
        right: 0,
        height: '100%',
        padding: "1px 8px"
    }
};


export default LangBtn;