function DynamicInput ({ label, type, name, value, onChange, placeholder }) {
    if (type === 'textarea') {
        return(
            <>
              <label>{label}</label>
              <textarea 
                rows={5}
                name={name} 
                value={value} 
                onChange={onChange}
                placeholder={placeholder}
                data-key={name}
              />
            </>
          ); 
    } else {
        return (
            <>
              <label>{label}</label>
              <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange}
                placeholder={placeholder}
                data-key={name}
              />
            </>
          ); 
    }
}

export default DynamicInput;