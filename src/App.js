import logo from "./logo.svg";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const trips = [
  {
    id: 221,
    name: "Visit Statue of Liberty",
    location: "Liberty Island, New York, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "../public/liberty.jpeg",
  },
  {
    id: 222,
    name: "Visit the Met Museum",
    location: "5 Museum Mile, New York, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "../public/liberty.jpeg",
  },
  {
    id: 223,
    name: "Visit Freedom Tower",
    location: "Liberty Island, New York, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "../public/liberty.jpeg",
  },
  {
    id: 224,
    name: "Have Dinner at Lucalis",
    location: "5 Evans Street, New York, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "../public/liberty.jpeg",
  },
];

function App() {
  let [tripList, updateTripList] = useState(trips);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = trips;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(tripList);
    updateTripList(items);
  }
  return (
    <div className="App">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="trips">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {tripList.map((trip, index) => {
                return (
                  <Draggable
                    key={trip.id}
                    draggableId={String(trip.id)}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <img
                          width="80px"
                          height="80px"
                          className="thumbnail"
                          src={
                            "https://media.architecturaldigest.com/photos/60ca1fa6699108e24d2f0e0d/3:4/w_1808,h_2411,c_limit/GettyImages-976208412.jpg"
                          }
                        />

                        <h2>{trip.name}</h2>
                        <h4>{trip.location}</h4>
                        <h5>{trip.description}</h5>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
