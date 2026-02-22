let count = 0;

const Message = () => {
  // will output twice in console due to strict mode 2nd render is greyed out.
  // 2 different numebrs. strict mode renders everything twice.
  console.log("Message called", count);
  count++;
  return <div>message {count}</div>;
};

export default Message;
