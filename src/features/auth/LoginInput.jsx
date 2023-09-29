export default function LoginInput ({ placeholder, type = "text", value, onChange }) {
    return (<input 
    type = {type} 
    placeholder = {placeholder} 
    className="block w-full rouned-md px-4 py-3 outline-none border border-gray-300 focus:ring-1 focus:ring-blue-500"
    value={value}
    onChange={onChange}/>
)
}
