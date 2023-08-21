import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise: Promise<Event> | null = null;

declare global {
  interface Window {
    TradingView: any;
  }
}

export const Chart: React.FC = () => {
  const onLoadScriptRef = useRef<(() => void) | null>();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => {
      onLoadScriptRef.current = null;
    };

    function createWidget() {
      if (document.getElementById('tradingview_8255e') && window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'BINANCE:SOLUSDT',
          interval: 'D',
          timezone: 'America/Caracas',
          theme: 'dark',
          style: '9',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: 'tradingview_8255e',
        });
      }
    }
  }, []);

  return (
    <div style={{
               height: "100%",
               width: "100%",
             }}
             className="rounded-[10px] border-[0.5px] border-white/20 overflow-hidden mt-0" id="tradingview_8255e">
      </div>
  );
};