import { useCallback, useEffect, useState } from 'react';
import type { DailyContentResponse } from '../../shared/types/api';

interface DailyContentState {
  layout: string;
  monster: string;
  modifier: string;
  loading: boolean;
}

export const useDailyContent = () => {
  const [state, setState] = useState<DailyContentState>({
    layout: '0101010101',
    monster: 'Goblin',
    modifier: 'None',
    loading: true,
  });

  const fetchContent = useCallback(async () => {
    try {
      const res = await fetch('/api/daily-content');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: DailyContentResponse = await res.json();
      setState({ ...data, loading: false });
    } catch (err) {
      console.error('Failed to fetch daily content', err);
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  useEffect(() => {
    void fetchContent();
  }, [fetchContent]);

  return { ...state, refetch: fetchContent };
};