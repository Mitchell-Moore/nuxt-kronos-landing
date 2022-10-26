<template>
  <div class="justify-center w-full bg-slate-100 text-black py-12 mt-24">
    <div class="container mx-auto">
      <div class="text-5xl font-bold mx-auto text-center w-full">
        Schedule meetings without Hermes!
      </div>
      <div class="flex flex-row mt-8">
        <div class="flex flex-col px-4">
          <div class="max-w-[40rem]">
            <div
              class="w-full hover:bg-slate-800 hover:text-slate-200 px-8 py-8 rounded-lg"
              :class="{
                'bg-slate-800 text-slate-200': activeStep === 'setAvailability',
              }"
              @mouseenter="() => (activeStep = 'setAvailability')"
            >
              <span class="font-semibold text-2xl">Set your availability</span>
              <p class="mt-2 text-sm leading-6">
                Set schedules for the times you want your disciples to meet with
                you.
              </p>
            </div>

            <div
              class="w-full hover:bg-slate-800 hover:text-slate-200 px-8 py-8 rounded-lg"
              :class="{
                'bg-slate-800 text-slate-200': activeStep === 'shareLink',
              }"
              @mouseenter="() => (activeStep = 'shareLink')"
            >
              <span class="font-semibold text-2xl">Share your link</span>
              <p class="mt-2 text-sm leading-6">
                Share your short kronos personal link and make it incredibly
                easy for people to book a meeting at a time that works for both
                of you!
              </p>
            </div>
            <div
              class="w-full hover:bg-slate-800 hover:text-slate-200 px-8 py-8 rounded-lg"
              :class="{
                'bg-slate-800 text-slate-200': activeStep === 'meeting',
              }"
              @mouseenter="() => (activeStep = 'meeting')"
            >
              <span class="font-semibold text-2xl">Meetings on your time</span>
              <p class="mt-2 text-sm leading-6">
                Set repeating schedules for the times of the day and week that
                you want people to be able to book you.
              </p>
            </div>
          </div>
        </div>
        <div
          class="max-w-[40rem] w-full mb-auto hidden md:flex justify-end mr-10"
        >
          <div
            class="bg-[#212121] rounded-lg w-96 h-96 p-8 flex items-center"
            :class="[{ 'bg-[#1b1b1c]': activeStep === 'meeting' }]"
          >
            <img
              src="@/images/SetAvailability.png"
              alt="Set availability calendar, days of the week enter start and end time"
              v-if="activeStep === 'setAvailability'"
            />
            <img
              src="@/images/link.png"
              alt="Twitter post with link to kronos.com"
              v-if="activeStep === 'shareLink'"
              class=""
            />
            <img
              src="@/images/Meeting.png"
              alt="Calendar with availability showing"
              v-if="activeStep === 'meeting'"
              class="ml-4 w-72 h-72"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 'setAvailability',
    };
  },
};
</script>

<style></style>
