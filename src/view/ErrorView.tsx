import * as React from 'react';

interface ErrorViewProps {
    error: string,
}


function ErrorView(props: ErrorViewProps) {
        return (
            <div className="error">
                <p>
                    {props.error}
                </p>
            </div>
        );
}

export default ErrorView;
