<template>
    <useHead>
        <title>Baby Name Genaritor</title>
    </useHead>

    <div :class="isdark ? ' bg-black' : 'bg-red-50'" class=" w-full h-[100%] flex flex-col justify-between">
        <Header />

        <!-- main -->
        <div :class="isdark ? ' bg-black mt-[20px]' : 'bg-red-50 mt-1'" class="w-full  relative">
            <div class="z-50">
                <div :class="isdark ? 'dark' : 'bg-red-200'"
                    class=" w-11/12 md:w-9/12 lg:w-6/12 h-[600px] text-[17px] font-bold flex flex-col p-3 gap-8 justify-start items-center mx-auto rounded-2xl ">
                    <h1 class=" text-[30px] border-b-2 border-red-500">Baby Name Genaritor</h1>
                    <div class=" w-full flex flex-col gap-4 items-center ">
                        <h4 class="text-[20px]">1_ Choose a grnder</h4>
                        <div class=" w-full flex gap-4 justify-center items-center">
                            <button @click="opsion.gender = Gender.BOY"
                                class="w-[100px] h-[45px] rounded-xl border-2 border-red-500"
                                :class="opsion.gender === Gender.BOY && 'bg-activebtn text-white'">Boy</button>
                            <button @click="opsion.gender = Gender.UNISEX"
                                class="w-[100px] h-[45px] rounded-xl border-2 border-red-500"
                                :class="opsion.gender === Gender.UNISEX && 'bg-activebtn text-white'">Unisex</button>
                            <button @click="opsion.gender = Gender.GIRL"
                                class=" w-[100px] h-[45px] rounded-xl border-2 border-red-500"
                                :class="opsion.gender === Gender.GIRL && 'bg-activebtn text-white'">Girl</button>
                        </div>
                    </div>
                    <div class=" w-full flex flex-col gap-4 items-center ">
                        <h4 class="text-[20px]">2_ Choose the names popularity</h4>
                        <div class=" w-full flex gap-4 justify-center items-center">
                            <button @click="opsion.popularity = Popularity.TRENDY"
                                class="w-[100px] h-[45px] rounded-xl border-2 border-red-500"
                                :class="opsion.popularity === Popularity.TRENDY && 'bg-activebtn text-white'">Trendy</button>
                            <button @click="opsion.popularity = Popularity.UNIQUE"
                                class="w-[100px] h-[45px] rounded-xl border-2 border-red-500"
                                :class="opsion.popularity === Popularity.UNIQUE && 'bg-activebtn text-white'">Unique</button>
                        </div>
                    </div>
                    <div class=" w-full flex flex-col gap-4 items-center ">
                        <h4 class="text-[20px]">3_ Choose the names length</h4>
                        <div class=" w-full flex gap-4 justify-center items-center">
                            <button @click="opsion.length = Length.LONG"
                                class="w-[100px] h-[45px] rounded-xl border-2 border-red-500"
                                :class="opsion.length === Length.LONG && 'bg-activebtn text-white'">Long</button>
                            <button @click="opsion.length = Length.ALL"
                                class="w-[100px] h-[45px] rounded-xl border-2 border-red-500"
                                :class="opsion.length === Length.ALL && 'bg-activebtn text-white'">All</button>
                            <button @click="opsion.length = Length.SHORT"
                                class="w-[100px] h-[45px] rounded-xl border-2 border-red-500"
                                :class="opsion.length === Length.SHORT && 'bg-activebtn text-white'">Short</button>
                        </div>
                    </div>
                    <button @click="showname"
                        class="mt-3 w-[150px] h-[45px] rounded-xl hover:bg-green-900 text-yellow-400 bg-red-500">Find
                        Name</button>
                </div>

                <div v-if="slectedname.length" :class="isdark ? 'dark' : 'bg-red-200'"
                    class="carts-cont grid grid-cols-2 md:grid-cols-3 w-11/12 mx-auto p-4 rounded-3xl md:w-9/12 lg:w-6/12 mt-2 gap-3">
                    <cart :slectedname="slectedname" />
                </div>
            </div>
            <div class="hidden lg:block absolute -top-32 left-0 ">
                <Svgleft />
            </div>
            <div class="hidden lg:block absolute top-60 right-0 ">
                <Svgright />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { Gender, Popularity, Length, names } from '@/data';

const { isdark } = darkmode()



interface objeckstate {
    gender: Gender,
    popularity: Popularity,
    length: Length
}
const opsion = reactive<objeckstate>({
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT,
})
const showname = () => {

    const filtername = names
        .filter((name) => name.gender === opsion.gender)
        .filter((name) => name.popularity === opsion.popularity)
        .filter((name) => {
            if (opsion.length === Length.ALL) return true
            else return name.length === opsion.length
        })
    slectedname.value = filtername.map((name) => name.name)
}

const slectedname = ref<string[]>([])


</script>


<style >
.dark {
    background-color: rgb(8, 3, 20);
    color: white;
    margin: 5px auto;
    border: 1px solid yellow;
    box-shadow: 0 0 10px rgb(250, 211, 69);
}
</style>
