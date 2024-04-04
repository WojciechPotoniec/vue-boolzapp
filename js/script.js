import { contacts } from "./data.js";

const dt = luxon.DateTime;
const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeContactId: 1,
      msgText: "",
      searchText: "",
    };
  },
  methods: {
    createMsg() {
      const newMessage = {
        date: dt.now().setLocale("it").toFormat("dd/MM/yyyy HH:mm:ss"),
        message: this.msgText,
        status: "sent",
      };
      return newMessage;
    },
    addMessage() {
      const newMessage = {
        date: dt.now().setLocale("it").toFormat("dd/MM/yyyy HH:mm:ss"),
        message: this.msgText,
        status: "sent",
      };
      this.activeContact.messages.push(newMessage);
      this.msgText = "";
      setTimeout(() => {
        const newMessage = {
          date: dt.now().setLocale("it").toFormat("dd/MM/yyyy HH:mm:ss"),
          message: "ok",
          status: "received",
        };
        this.activeContact.messages.push(newMessage);
      }, 1000);
    },
  },
  computed: {
    activeContact() {
      return this.contacts.find((el) => el.id === this.activeContactId);
    },
    filteredContacts() {
      return this.contacts.filter((el) =>
        el.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  mounted() {},
}).mount("#app");
