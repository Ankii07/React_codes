import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  expenses,
  setExpense,
  setEditingRowId,
}) {
  if (!menuPosition.left) return;
  // jb hum editing pe click krenge jo value form mai jayegi uske liye form ko pta hona chahiye ki jo value form mai
  // aayi hai wh save ke liye aai hai ya add ke liye jiske liye hume ek state rakh skte hai jo hume yh sab btayega

  // form ko yh bhi pata hona chaiye ke save pe click krne ke baad kis row pe edit krna hai jiske liye hum rowid ka help le skte hai..
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          // yha pe jo filter krke nikal rhe hai to return kr rha hai ek array jo ki contain kr rha hai required result
          // agr hume array nhi balki direct answer chahiye to ek method hai array ka find jo direct answer return krta hai joki match kr rha hai
          // jo find se answer milega usko destructer kr lenge aur set krwa denge

          // yha pe ek problem thi ki direct jb set kr rhe the expense to usme id bhi set ho kr ja rha tha tha
          // isiliye add pe click krke add krwa rhe the to some id value ke liye bhi check rha tha jiske wjh se error aa rhi thi
          // is cheez ko solve krne ke liye destructure krke sirf title,category aur amount hi set krenge..
          // const ex = expenses.filter((expense) => expense.id == rowId);
          //   console.log(ex);
          //  setExpense(ex[0]);

          const { title, category, amount } = expenses.find(
            (expense) => expense.id == rowId
          );
          setExpense({ title, category, amount });
          // jb bhi rowId set hoga pura component rerender hoga aur EditingrowId rowId se set ho jayega..
          setEditingRowId(rowId);
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
