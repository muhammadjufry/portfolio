import { Button, Container, TextInput, Textarea } from "@mantine/core";
import emailjs from "@emailjs/browser";
import "../assets/css/contact.css";
type Props = {};

function Contact({}: Props) {
  const sendEmail = (e: any) => {
    e.preventDefault();
    const data = {
      from_name: document.querySelector<any>(".yourName div input").value,
      to_name: "Muhammad Jufry",
      from_email: document.querySelector<any>(".yourEmail div input").value,
      message: document.querySelector<any>(".yourMessage div textarea").value,
    };
    console.log(data);
    emailjs
      .send("service_p8hqck4", "template_7xrswpp", data, "mgTgN8I2OWQdvqVRA")
      .then(
        (result) => {
          console.log(result.text);
          alert("You message has been sent!");
          document.querySelector<any>(".yourName div input").value = ""; // Clear input field
          document.querySelector<any>(".yourEmail div input").value = ""; // Clear input field
          document.querySelector<any>(".yourMessage div textarea").value = ""; // Clear input field
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact" id="contact">
      <Container mb={30}>
        <h2>Contact me</h2>
        <form onSubmit={sendEmail}>
          <br />
          <TextInput
            withAsterisk
            label="Your Name"
            placeholder="Your name"
            className="yourName"
          />
          <br />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            className="yourEmail"
          />
          <br />
          <Textarea
            withAsterisk
            label="Message"
            autosize
            minRows={10}
            placeholder="Write your message here..."
            className="yourMessage"
          />
          <br />
          <Button type="submit">Send</Button>
        </form>
      </Container>
    </section>
  );
}

export default Contact;
