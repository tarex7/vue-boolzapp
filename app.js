
const app = new Vue({
  el: "#root",
  data: {
    currentContact: 0,
    searchInput: "",
    visible: false,

    newMsg: "",
    user: {
      name: "Salvatore",
      avatar: "_io",
    },
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_6",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    setCurrentContact(contact, index, event) {
      this.currentContact = index;
      //event.target.classList.add("active");
    },
    addMessage(text, status) {
      const newMessage = {
        date: this.getNow,
        text: text,
        status: status,
      };

      this.contacts[this.currentContact].messages.push(newMessage);
    },
    sendMessage() {
      if (!this.newMsg) return;

      this.addMessage(this.newMsg, "sent");
      this.newMsg = "";
      this.autoReply();
    },

    autoReply() {
      setTimeout(() => {
        this.addMessage("Ok", "received");
      }, 1000);
    },

    searchContact() {
      this.filtered = this.contacts.filter((contact, i) => {
        return contact.name.includes(this.searchInput);
      });
    },
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
    getNow() {
      let dateObj = new Date();
      let month = dateObj.getMonth() + 1;
      let day = dateObj.getDate();
      let year = dateObj.getFullYear();
      let hour = dateObj.getHours();
      let min = dateObj.getMinutes();
      let sec = dateObj.getSeconds();
      dateObj.getSeconds() < 10 ? (sec = "0" + sec) : (sec = sec);
      return (newdate = `${day}/${month}/${year}  ${hour}:${min}:${sec}`);
    },
  },
});
