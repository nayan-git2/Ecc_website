import React from 'react';
import './CodeCard.css';

const CodeCard = () => {
    return (
        <div className="code-card-section">
            <div className="code-card-container glass">
                <div className="window-controls">
                    <span className="dot close"></span>
                    <span className="dot minimize"></span>
                    <span className="dot expand"></span>
                </div>

                <div className="code-content">
                    <div className="code-line">
                        <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> <span className="bracket">{"{"}</span>
                    </div>
                    <div className="code-line indent">
                        <span className="property">passion:</span> <span className="string">'coding'</span>,
                    </div>
                    <div className="code-line indent">
                        <span className="property">community:</span> <span className="string">'ECC'</span>,
                    </div>
                    <div className="code-line indent">
                        <span className="property">status:</span> <span className="string">'building the future'</span>
                    </div>
                    <div className="code-line">
                        <span className="bracket">{"}"}</span>;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeCard;
