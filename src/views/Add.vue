<template>
  <h1>Add New Acontact</h1>
  <form @submit.prevent="addContact">
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
  data: () => ({
    contact: {
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  }),
  methods: {
    addContact() {
      let data = JSON.parse(localStorage.getItem("contacts"));
      let bigestId = data.reduce((acc, cur) => {
        return acc.id > cur.id ? acc.id : cur.id;
      });
      this.contact.id = Math.floor(2000 * Math.random()) + 20;
      data.push(this.contact);
      localStorage.setItem(
        "contacts",
        JSON.stringify(
          data.sort((a, b) => a.lastname.localeCompare(b.lastname))
        )
      );
      this.$router.push("/");
    },
  },
};
</script>
