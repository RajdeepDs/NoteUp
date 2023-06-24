export default function Tags(){
    return (
        <>
        <ul className="flex space-x-3">
              {note?.tags?.map((tag) => (
                <li
                  key={tag.id}
                  className="rounded-sm bg-accent-2 p-1 text-xs text-accent-5 "
                >
                  {tag.name}
                  <button className="ml-1 p-1 hover:bg-accent-3/50">x</button>
                </li>
              ))}
              <AddTag/>
            </ul>
        </>
    );
}