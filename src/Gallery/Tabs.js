import React from 'react';


export default class Tabs extends React.Component {

    render() {
        return (
            <div className="gallery">
                <nav className="nav nav-fill">
                    {React.Children.map(this.props.children, (tab, index) =>
                        React.cloneElement(tab, {
                            index,
                            active: index === this.props.activeTabIndex,
                            onClick: (tabIndex) => this.props.handleTabClick(tabIndex)
                        }))
                    }
                </nav>

                <div className="grid">
                    {this.props.children[this.props.activeTabIndex].props.children}
                </div>
            </div>
        );
    }
}