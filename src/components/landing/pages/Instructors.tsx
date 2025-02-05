import InstructorBox from "../_components/InstructorBox";
import ListContainer from "../_components/ListContainer";

const tempInstructorData = [
  {
    name: "Ronald Richards",
    category: "UI/UX Designer",
    reviews: 4.8,
    image: "https://via.placeholder.com/150",
    students: 2100,
  },
  {
    name: "Ronald Richards",
    category: "UI/UX Designer",
    reviews: 4.8,
    image: "https://via.placeholder.com/150",
    students: 2100,
  },
  {
    name: "Ronald Richards",
    category: "UI/UX Designer",
    reviews: 4.8,
    image: "https://via.placeholder.com/150",
    students: 2100,
  },
  {
    name: "Ronald Richards",
    category: "UI/UX Designer",
    reviews: 4.8,
    image: "https://via.placeholder.com/150",
    students: 2100,
  },
];

function Instructors() {
  return (
    <ListContainer
      header="Top Instructors"
      path="/instructors"
      render={tempInstructorData.map((instructor) => (
        <InstructorBox instructor={instructor} />
      ))}
    />
  );
}

export default Instructors;
