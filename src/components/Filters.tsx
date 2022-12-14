import { useState } from "react";
import { absenceTypes } from "../constants/resource.constants";
import { getDate } from "../helpers/date.helpers";
import { FiltersType } from "../types/component.types";

const Filters: FiltersType = ({ type, date, page, handleFilter }) => {
  const [state, setState] = useState({ type: type, date: date });

  const resetFilter: () => void = () => {
    setState({ type: "", date: "" });
    handleFilter(true);
  };

  return (
    <>
      <div className="mt-4">
        <div className="ring-1 ring-orange-400">
          <details className="p-4 rounded-lg">
            <summary className="font-semibold text-xl cursor-pointer">
              Filters{" "}
            </summary>
            <div className="mt-4 grid gap-3 sm:grid-cols-4">
              <div className="col-span-4 sm:col-span-1">
                <select
                  value={state.type}
                  onChange={(e) => setState({ ...state, type: e.target.value })}
                  className="w-full py-3 px-2 rounded border border-gray-300 text-gray-800 bg-white shadow-lg"
                >
                  <option value="">Absence type: All</option>
                  {absenceTypes.map((absenceType) => (
                    <option key={absenceType} value={absenceType}>
                      {absenceType}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-4 sm:col-span-1">
                <input
                  type="date"
                  value={state.date}
                  onChange={(e) => setState({ ...state, date: e.target.value })}
                  className="w-full py-2 px-2 rounded border border-gray-300 text-gray-800 bg-white shadow-lg"
                />
              </div>
              <div className="col-span-2 text-right">
                <button
                  onClick={() =>
                    type === "" && date === "" && page === 1
                      ? {}
                      : resetFilter()
                  }
                  disabled={type === "" && date === "" && page === 1}
                  data-bs-toggle="tooltip"
                  title={
                    type === "" && date === "" && page === 1
                      ? "Already at default"
                      : ""
                  }
                  className="mx-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded disabled:cursor-not-allowed disabled:hover:bg-orange-400"
                >
                  Reset
                </button>
                <button
                  disabled={type === state.type && date === state.date}
                  onClick={() =>
                    type === state.type && date === state.date
                      ? {}
                      : handleFilter(false, state)
                  }
                  data-bs-toggle="tooltip"
                  title={
                    type === state.type && date === state.date
                      ? "Already Applied"
                      : ""
                  }
                  className="mx-2 bg-transparent hover:bg-orange-400 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-orange-500 disabled:hover:border-orange-400"
                >
                  Apply Filters
                </button>
              </div>
              <div className="col-span-4">
                {(type || date) && (
                  <p className="text-sm text-gray-700">
                    Showing Results for :{" "}
                  </p>
                )}
                {type && (
                  <p>
                    Leave type: <span className="font-bold">{type}</span>
                  </p>
                )}
                {date && (
                  <p>
                    Date: <span className="font-bold">{getDate(date)}</span>
                  </p>
                )}
              </div>
            </div>
          </details>
        </div>
      </div>
    </>
  );
};

export default Filters;
