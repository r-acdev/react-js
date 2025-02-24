interface InputControlProps {
    label?: string;
    placeholder: string;
    name: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputControl: React.FC<InputControlProps> = ({ label, placeholder, name, type = "text", onChange }) => {
    return (
        <div className="">
            {label && <label>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
            />
        </div>
    );
};

export default InputControl;