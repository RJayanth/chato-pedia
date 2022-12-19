import { useRef, useEffect } from 'react';
let prevScrollTop  = 0;
const useChatScroll = (dependency) => {
    const ref = useRef(null);
    useEffect(() => {
        if(ref.current && ref.current.scrollTop >= prevScrollTop) {
            prevScrollTop = ref.current.scrollTop;
            ref.current.scrollTop = ref.current.scrollHeight;
        }

    }, [dependency])

    return ref;
}

export default useChatScroll;