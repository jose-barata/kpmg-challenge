interface Props {
  value: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange: (change: React.ChangeEvent<HTMLInputElement>) => void;
  testId?: string;
}

export const Input = (props: Props) => {
  const {
    value,
    label,
    name,
    placeholder,
    type = "text",
    onChange,
    testId,
  } = props;

  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        data-testid={testId}
      />
    </div>
  );
};
