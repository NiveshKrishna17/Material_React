// useState and useMemo hook
import { Fragment, useState, useMemo } from "react";
export default function DayTwo() {
    const [number, setNumber] = useState(0);

    const squaredNumber = useMemo(() => {
        if (number > 0) {
            // console.log("Calculationg");
            return number * number;
        }
    }, [number]);

    return (
        <Fragment>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                />
                <p>
                    The Square of an {number > 0 ? number : 0} is {squaredNumber > 0 ? squaredNumber : 0}
                </p>
            </div>
        </Fragment>
    );
}
