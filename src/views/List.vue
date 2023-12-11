<template>
  <h1>List</h1>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          v-model="search"
        />
      </div>
      <div class="col-md-6">
        <router-link to="/add" class="btn btn-success"
          >Add New Contact</router-link
        >
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(contact, index) in filtered" :key="index">
              <td>{{ contact.firstname }}</td>
              <td>{{ contact.lastname }}</td>

              <td>
                <router-link
                  :to="`/detail/${contact.id}`"
                  class="btn btn-primary"
                  >Detail</router-link
                >
                <router-link :to="`/edit/${contact.id}`" class="btn btn-warning"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click="deleteContact(contact.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import contacts from "../data/contacts.js";

export default {
  data: () => ({
    contacts:
      JSON.parse(localStorage.getItem("contacts")) ||
      contacts.sort((a, b) => a.lastname.localeCompare(b.lastname)),
    filtered: contacts,
    search: "",
  }),
  methods: {
    deleteContact(id) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
      this.filtered = this.contacts;
    },
  },
  mounted: () => {
    let storedContacts = localStorage.getItem("contacts");
    if (!storedContacts) {
      localStorage.setItem(
        "contacts",
        JSON.stringify(
          contacts.sort((a, b) => a.lastname.localeCompare(b.lastname))
        )
      );
    }
  },
  created() {
    this.filtered = this.contacts;
  },

  watch: {
    search: function (val) {
      this.filtered = this.contacts.filter((contact) => {
        const name = `${contact.firstname} ${contact.lastname}`;
        return name.toLowerCase().includes(val.toLowerCase());
      });
    },
  },
};
</script>
