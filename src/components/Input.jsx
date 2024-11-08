function DynamicInput ({ label, type, name, value, onChange, placeholder }) {
    if (type === 'textarea') {
        return(
            <>
              <label>{label}</label><br />
              <textarea 
                rows={4}
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
              <label>{label}</label><br />
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