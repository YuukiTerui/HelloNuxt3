import type { Ref } from 'vue';

export const useCounterState = () => {
    const count = useState<number>('count', ()=>0);
    return {
        counter: readonly(count),
        countUp: countUp(count),
        countDown: countDown(count),
        countReset: countReset(count)
    }
}

const countUp = (count: Ref<number>) => () => {
    count.value++;
}

const countDown = (count: Ref<number>) => () => {
    if (count.value>0) {
        count.value--;
    }
}

const countReset =(count: Ref<number>) => () => {
    count.value = 0;
}