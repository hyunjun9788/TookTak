const List = () => (
  <div className="flex flex-col gap-4">
    <p className="text-xl mt-6">할 일 리스트</p>
    <input
      className="border-b-2 p-2 focus:outline-none"
      placeholder="검색어를 입력해 주세요"
    />
  </div>
);
export default List;
