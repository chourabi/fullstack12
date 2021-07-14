function DateComponent(props){

    /**
     * {
     *  format:"f",
     *  test:"1800"
     * }
     */
    console.log(props);
    
    const date = new Date();

    return (
        <div>
            <h3>Today is,  {date.getDate()} / { date.getMonth()+1 } / { date.getFullYear() } </h3>
        </div>
    );
}

export default DateComponent;