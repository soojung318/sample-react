function RadioGroup({ label, children }) { // eslint-disable-line no-unused-vars
    return (
        <fieldset>
            <legend>{label}</legend>
            {children}
        </fieldset>
    );
} // eslint-disable-line no-unused-vars