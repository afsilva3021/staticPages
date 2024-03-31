function Temp()
{
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();


    return (
        <div>
            {dynamicDateString} (dinâmico)
        </div>
    )
}



export default Temp