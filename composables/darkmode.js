
const usedarkmode = ()=>{
    const isdark = useState('isdarkmode',()=> false)

    const checkvalue = ()=>{
        isdark.value = !isdark.value
    }

    return{
        isdark,
        checkvalue
    }
}

export default usedarkmode
