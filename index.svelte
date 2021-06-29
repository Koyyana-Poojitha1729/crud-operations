<script>
import { set_data } from 'svelte/internal';

    import {firestore} from '../db';
//CRUD operations
    //Read operation
    async function getData(){
        const response = await firestore.collection('users').doc('user1').get();
        console.log(response.data())
    }
    async function delData() {
        await firestore.collection('users').doc('user1').delete();
        console.log("SUCCESS");
    }
    async function updateData(){
        await firestore.collection('users').doc('user2').update({
            name: 'poojitha'
        })
    }
    // with doc name
    async function createData(){
        await firestore.collection('users').doc('user1').set({
            Branch : 'cse',
            name : 'poojitha',
            section : 'B'
        })
    }
    async function createData2(){
        await firestore.collection('users').add({
            Branch : 'Mech',
            name : 'Jhon',
            section : 'B'
        })
    }
</script>
<h4>React Firebase</h4>
<button on:click={getData}>get data</button>
<button on:click={delData}>Del data</button>
<button on:click={updateData}>Update Data</button>
<button on:click={createData}>Create user1 data</button>
<button on:click={createData2}>Create data</button>