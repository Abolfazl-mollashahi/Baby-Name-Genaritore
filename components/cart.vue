<template>
    <div class="cart relative w-[120px] mx-auto h-[45px]" v-for="name in slectedname" :key="name">
        <span @click="names(name)"
            class=" cursor-pointer w-[20px] h-[20px] rounded-full flex justify-center items-center  absolute -top-2 -right-1 text-[15px] text-white bg-red-600">X</span>
        <p
        :class="isdark ? 'bg-violet-950 text-white' : 'bg-violet-600 text-white'" 
        class=" w-full h-full flex justify-center items-center  rounded-xl ">{{ name }}</p>
    </div>
</template>

<script setup>
const {isdark} = darkmode()

const prop = defineProps({
    slectedname: {
        type: Array
    },
})


const names = (name) => {
    prop.slectedname.find((item,index)=>{
        if(item === name){
            prop.slectedname.splice(index,1)
        }
    })
}

</script>