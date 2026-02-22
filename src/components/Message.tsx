// 4_Managing_Component_State_Purity .

// returns same value
let count = 0;

const Message = () => {
  // will make increments of 2,4,6,8 when called in App.tsx - IMPURE
  // Dont change any object before rendering, such as count above at 0
  let count_pure = 0;
  count++;
  count_pure++;
  return (
    <div>
      Pure: {count_pure} Message Impure: {count}
    </div>
  );
};

export default Message;
