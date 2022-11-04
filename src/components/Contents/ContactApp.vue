<template lang="">
  <div class="box-contact" id="contact">
    <div class="text-center">
      <h2>CONTACT</h2>
      <hr />
    </div>
    <div class="contact">
      <div class="contact-info">
        <h2>ADDRESS</h2>
        <p>123 Street, New York (USA)</p>
      </div>
      <div class="contact-info">
        <h2>PHONE</h2>
        <p>+123 456 789</p>
      </div>
      <div class="contact-info">
        <h2>EMAIL</h2>
        <p><a href="#">info@myemail.com</a></p>
      </div>
    </div>
    <form action="#">
      <input type="text" name="name" placeholder="Name*" />
      <input type="text" name="email" placeholder="Email*" />
      <textarea placeholder="Message*"></textarea>
      <input class="send" type="submit" name="send" value="SEND" />
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.box-contact {
  position: relative;
  top: 330vh;
  height: 56rem;
  text-align: center !important;
  margin-bottom: 40px;
}

.box-contact > .text-center h2 {
  padding-top: 12.5rem;
  letter-spacing: 5px;
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  font-weight: 200;
  padding-bottom: 2rem;
}

.box-contact > .text-center hr {
  width: 3rem;
  height: 3px;
  margin: 0 auto;
  background-color: rgb(173, 0, 255);
  border: none;
  margin-bottom: 3rem;
}

.box-contact > .contact {
  display: flex;
  padding: 0 5rem;
}

.box-contact > .contact > .contact-info {
  letter-spacing: 3px;
  width: 33.3%;
}

.box-contact > .contact > .contact-info h2 {
  font-weight: 400;
  padding-bottom: 1rem;
}

.box-contact > .contact > .contact-info p {
  color: var(--text-color);
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.box-contact > .contact > .contact-info p a {
  color: var(--primary-color);
  text-decoration: none;
}

.box-contact form {
  padding: 10rem;
}

.box-contact form input {
  width: 45%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid var(--text-color);
  padding-left: 1rem;
  margin-right: 1rem;
  color: var(--text-color);
}

.box-contact form input:focus {
  outline: none;
  border-bottom: 1px solid var(--primary-color);
  transition: 1s;
}

.box-contact form textarea {
  margin-top: 10rem;
  max-width: 93.3%;
  min-width: 93.3%;
  padding-left: 1rem;
  border: none;
  border-bottom: 1px solid var(--text-color);
  min-height: 10rem;
  color: var(--text-color);
}

.box-contact form textarea:focus {
  outline: none;
  border-bottom: 1px solid var(--primary-color);
  transition: 1s;
}

.box-contact form > .send {
  margin-right: 2rem;
  margin-top: 4rem;
  float: right;
  width: 8rem;
  height: 3rem;
  background-color: white;
  border: 3px solid var(--primary-color);
  color: var(--primary-color);
  font-size: 1rem;
  letter-spacing: 2px;
  cursor: pointer;
  padding-right: 1rem;
}

.box-contact form > .send:hover {
  background-color: var(--primary-color);
  color: white;
  transition: 1s;
}
</style>
