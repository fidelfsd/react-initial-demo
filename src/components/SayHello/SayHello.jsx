import "./SayHello.css";

const SayHello = ({ title, age }) => {
   //console.log(props);
   return (
      <div className="SayHello">
         <h2>
            Hi {title}, {age}
         </h2>
      </div>
   );
};

export default SayHello;
