<template>
    <div :class="isdark ? ' bg-black ' : 'bg-red-50'" class=" w-full  pt-3">
            <div :class="isdark ? ' dark' : 'bg-red-300'"
                class="w-11/12 h-[100px] md:w-9/12 lg:w-6/12 mx-auto flex justify-around items-center rounded-2xl ">
                <div class="logo">
                    <img class=" w-[80px] h-[80px] rounded-full" src="/logo.jpg" alt="">
                </div>
                <div class="btns">
                    <button @click="checkvalue" :class="isdark ? 'border-yellow-500' : 'border-black'"
                        class="w-[50px] h-[50px] border-2 text-white p-1 rounded-full">
                        <img v-if="isdark" class=" w-full h-full bg-cover" src="/on.png" alt="">
                        <img v-if="!isdark" class=" w-full h-full bg-cover" src="/off.png" alt="">
                    </button>
                </div>
            </div>
        </div>
</template>


<script setup>
const {isdark,checkvalue}= darkmode()

</script>
