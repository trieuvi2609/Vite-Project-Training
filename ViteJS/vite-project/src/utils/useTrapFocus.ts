import { useEffect } from 'react';
import trapFocus from '~/utils/trapFocus';

const useTrapFocus = (containerID: string) => {
  useEffect(() => {
    if (!containerID) return;
    const eventTrapFocus = trapFocus(containerID);
    return eventTrapFocus;
  }, [trapFocus, containerID]);
};

export default useTrapFocus;
