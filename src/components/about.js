import { useForm } from "react-hook-form";
function About() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const post = JSON.stringify(data);
    console.log(post);
    try {
      const response = await fetch("https://7y6v9n-8080.csb.app/api/about", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: post,
      });
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ padding: 10 }}>
          {" "}
          <br />
          <span>Name:</span>
          <br />
          <input type="text" {...register("name", { required: true })} />
          <br />
          {errors.name && <div style={{ color: "red" }}>Name is required</div>}
          <span>Email:</span>
          <br />
          <input type="text" {...register("email", { required: true })} />
          <br />
          {errors.email && (
            <div style={{ color: "red" }}>Email is required</div>
          )}
          <span>Feedback:</span>
          <br />
          <textarea {...register("feedback", { required: true })}></textarea>
          <br />
          {errors.feedback && (
            <div style={{ color: "red" }}>Feedback is required</div>
          )}
          <br />
          <button type="submit">Add New</button>
        </div>
      </form>
    </div>
  );
}

export default About;
