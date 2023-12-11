<template>
  <h1>Edit Contact</h1>
  <form @submit.prevent="editContact">
    <div class="form-group">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        class="form-control"
        id="firstname"
        v-model="contact.firstname"
      />
    </div>
    <div class="form-group">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        class="form-control"
        id="lastname"
        v-model="contact.lastname"
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="text"
        class="form-control"
        id="email"
        v-model="contact.email"
      />
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input
        type="text"
        class="form-control"
        id="phone"
        v-model="contact.phone"
      />
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
    <router-link to="/" class="btn btn-primary">Cancel</router-link>
  </form>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    contact: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  }),
  methods: {
    editContact() {
      let data = JSON.parse(localStorage.getItem("contacts"));
      let edited = data.filter((contact) => contact.id != this.id);
      edited.push(this.contact);
      localStorage.setItem(
        "contacts",
        JSON.stringify(
          edited.sort((a, b) => a.lastname.localeCompare(b.lastname))
        )
      );
      this.$router.push("/");
    },
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem("contacts"));
    this.contact = data.filter((contact) => contact.id == this.id)[0];
    console.log(this.contact);
  },
};
</script>
