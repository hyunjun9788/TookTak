const TodoItem = () => (
  <div className="flex gap-4 py-5 border-b-[1px]">
    <input type="checkbox" />
    <div className="flex-1">토익</div>
    <div>날짜</div>
    <button type="button">삭제</button>
  </div>
);

export default TodoItem;
