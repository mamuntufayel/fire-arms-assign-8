import React from 'react';

const Answers = () => {
    return (
        <div>
            <div>
                <h3>How react works?</h3>
                <p>
                    Answer:React is a virtual DOM.Its makes a own copy of the JS components.If user make any change of a component,React first compare the change with its own DOM.Then change the portion which it found changed and the show it to UI.It change a certain portion of the UI,and also keep this portion to its own virtual DOM.Everytime it change the UI after compering with its own DOM.
                </p>
            </div>
            <div>
                <h3>Difference Between prpos and state?</h3>
                <p>Answer:The props means property which is passed to the component, similar to how an argument is passed to a function.We could even rewrite the component to be simpler.In a React component, props are variables passed to it by its parent component.And on the other hand State is still variables, but directly initialized and managed by the component.Also Props should never be changed in a child component.State changeable only within the component.So if there is something going on that alters some variable, that variable should belong to the component state.</p>
            </div>

        </div>

    );
};

export default Answers;