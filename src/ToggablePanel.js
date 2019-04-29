import React from 'react';

import { Panel, QueryRuleContext } from 'react-instantsearch-dom';

const toggablePanel = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                opened: !props.closed
            };

            this.togglePanel = this.togglePanel.bind(this);
        }

        togglePanel() {
            this.setState((currentState) => ({ opened: !currentState.opened }))
        }

        render() {
            const { opened } = this.state;
            return (
                <div>
                    <QueryRuleContext
                        trackedFilters={{
                            [WrappedComponent.attribute]: value => value
                        }}
                        transformRuleContexts={
                            ruleContexts => ruleContexts.map(ruleContext => ruleContext !== undefined ? ruleContext.replace(/(.+)(_.+)/, '$1') : undefined)
                        }
                    />
                    <Panel header={WrappedComponent.header} className={opened ? 'opened' : 'closed'}>
                        {opened && <WrappedComponent {...this.props} opened={opened} />}
                        <span className="ais-Panel-collapse" onClick={this.togglePanel} />
                    </Panel>
                </div>
            )
        }
    }
};

export default toggablePanel;