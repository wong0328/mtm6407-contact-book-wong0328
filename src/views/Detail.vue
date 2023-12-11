<template>
  <div class="row">
    <div class="col-md-12">
      <h1>Detail</h1>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ contact.firstname }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ contact.lastname }}
          </h6>
          <p class="card-text">{{ contact.email }}</p>
          <p class="card-text">{{ contact.phone }}</p>
          <router-link :to="`/edit/${contact.id}`" class="btn btn-warning"
            >Edit</router-link
          >
          <button class="btn btn-danger" @click="deleteContatc">Delete</button>
          <router-link to="/" class="btn btn-primary">List</router-link>
        </div>
      </div>
    </div>
  </div>
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
    deleteContatc() {
      let data = JSON.parse(localStorage.getItem("contacts"));
      let newData = data.filter((contact) => contact.id != this.id);
      localStorage.setItem(
        "contacts",
        JSON.stringify(
          newData.sort((a, b) => a.lastname.localeCompare(b.lastname))
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
