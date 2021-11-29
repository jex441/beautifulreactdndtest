import logo from "./logo.svg";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import liberty from "./liberty.jpeg";

const trips = [
  {
    id: 221,
    name: "Visit Statue of Liberty",
    location: "Liberty Island, New York, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl: liberty,
  },
  {
    id: 222,
    name: "Visit the Met Museum",
    location: "5 Museum Mile, New York, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl:
      "http://www.metmuseum.org/-/media/images/visit/met-fifth-avenue/fifthave_teaser.jpg?sc_lang=en",
  },
  {
    id: 223,
    name: "Visit Freedom Tower",
    location: "Liberty Island, New York, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl:
      "https://www.nydailynews.com/resizer/EsyO7of502AOt3lM9wrqf4NCYOk=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/SUNBWE47ACEVH67NCDESD2RHJ4.jpg",
  },
  {
    id: 224,
    name: "Have Dinner at Lucalis",
    location: "5 Evans Street, New York, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl:
      "https://infatuation.imgix.net/media/images/reviews/lucali/TeddyWolff.Lucali.Interiors.16.jpg?auto=format&w=256",
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
                        <div>
                          <img
                            src={trip.imageUrl}
                            className="thumbnail"
                            alt="tripPhoto"
                          />
                        </div>
                        <div>
                          <h5>{trip.name}</h5>
                          <h5>{trip.location}</h5>
                          <p>{trip.description}</p>
                        </div>
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
