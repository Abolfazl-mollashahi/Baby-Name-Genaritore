<template>
    <div :class="isdark ? '  mt-[20px]' : ' bg-red-50  mt-1'" class="w-full h-[132px] pb-[1%]">
        <div :class="isdark ? ' dark  text-white' : 'bg-red-300'"
            class="w-11/12 h-[90px] md:w-9/12 lg:w-6/12  mx-auto font-bold  md:text-[20px] flex gap-1 justify-center items-center rounded-2xl ">
            <p>Front-End Developer : </p>
            <p> Abolfazl mollashahi</p>
        </div>
    </div>
</template>

<script setup>
const {isdark} = darkmode()

</script>