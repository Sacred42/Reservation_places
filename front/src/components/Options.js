const createSelect = (qty) => {
    const arrOption = [];
    for(let i = 0; i < qty; i++ ){
        arrOption.push(<option value={i + 1} key={i + 1}>{`${i + 1} этаж`}</option>)
    }
    return (arrOption);
}

export {createSelect}