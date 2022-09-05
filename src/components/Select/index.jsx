import React, { useContext } from "react";
import * as S from "./styles";
import { DataContext } from "../../context";

const Select = ({
    value,
    setValue,
    listOptions,
    waitingMessage,
    firstOption,
}) => {
    const { darkMode } = useContext(DataContext);
    const optionsList = listOptions ? [firstOption, ...listOptions] : null;

    return (
        <S.Select
            darkMode={darkMode}
            value={value}
            onChange={({ target }) => setValue(target.value)}
        >
            {!optionsList ? (
                <option value={-1} disabled>
                    {waitingMessage}
                </option>
            ) : (
                optionsList.map((e, i) => (
                    <option key={i} value={i === 0 ? -1 : e}>
                        {e}
                    </option>
                ))
            )}
        </S.Select>
    );
};

export default Select;
