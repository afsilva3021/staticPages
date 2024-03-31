function Temp()
{
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTSting();


    return (
        <div>
            {dynamicDateString} (dinâmico)
        </div>
    )
}



export default Temp