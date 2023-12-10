<template>
  <div>
    <h1>Verfügbare Zimmer im Lucifer-Stil</h1>
    
    <div v-for="room in availableRooms" :key="room.room_number" class="room-card">
      <img :src="room.image" :alt="`${room.name} Zimmer`" class="room-image">
      <h2>{{ room.name }}</h2>
      <p>{{ room.description }}</p>
      <p>Preis pro Nacht: {{ room.price }} EUR</p>
      <button @click="bookRoom(room)">Jetzt buchen</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import supabase from '@/supabase';

export default {
  data() {
    return {
      rooms: [],
    };
  },
  computed: {
    availableRooms() {
      return this.rooms.filter(room => room.status === 'Available');
    },
  },
  methods: {
    async fetchRooms() {
      try {
        const { data, error } = await supabase
          .from('rooms')
          .select('*')
          .eq('room_category_id', 1);

        if (error) {
          console.error('Error fetching rooms:', error.message);
        } else {
          this.rooms = data.map(room => ({
            room_number: room.room_number,
            name: room.name,
            description: room.description,
            price: room.price,
            status: room.status,
            // Hier füge die URL aus dem Supabase-Bucket hinzu
            image: `https://<bucket-name>.storage.<region>.supabase.co/${room.image}`,
          }));
        }
      } catch (error) {
        console.error('Error fetching rooms:', error.message);
      }
    },
    bookRoom(room) {
      alert(`Sie haben das Zimmer "${room.name}" erfolgreich gebucht!`);
      // Hier könntest du die Benutzer weiterleiten oder weitere Aktionen durchführen
    },
  },
  mounted() {
    this.fetchRooms();
  },
};
</script>

<style scoped>
.room-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: left;
}

.room-image {
  max-width: 10%;
  border-radius: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
}
</style>
