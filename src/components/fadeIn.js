/** @format */

// useFadeInUp.js
import { ref, onMounted, onUnmounted } from "vue";

export default function useFadeInUp(elementRef) {
  const shouldFadeIn = ref(false);

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      shouldFadeIn.value = true;
      observer.unobserve(elementRef.value);
    }
  });

  onMounted(() => {
    observer.observe(elementRef.value);
  });

  onUnmounted(() => {
    observer.disconnect();
  });

  return { shouldFadeIn };
}
