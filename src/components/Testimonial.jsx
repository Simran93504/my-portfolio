import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Komal Sharma"}
          feedback={"You are a continous learner and a great developer.I am glad to work with you in major project."}
        />

        <TestimonialCard
          name={"Kanak Priya"}
          feedback={
            "Your best thing is that you share your knowledge , ideas or any important information with others"
          }
        />

        <TestimonialCard
          name={"Vaibhav Joshi"}
          feedback={"You are a time-management ninja when it comes to studying"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;