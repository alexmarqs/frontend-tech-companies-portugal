import {
  OpenPanelComponent,
  PostEventPayload,
  useOpenPanel,
} from "@openpanel/nextjs";

const isProd = process.env.NODE_ENV === "production";

type AnalyticsProviderProps = {
  children: React.ReactNode;
  clientId?: string;
};

const AnalyticsProvider = ({ children, clientId }: AnalyticsProviderProps) => {
  return (
    <>
      <OpenPanelComponent
        clientId={clientId ?? ""}
        trackScreenViews={isProd}
        trackAttributes={isProd}
        trackOutgoingLinks={isProd}
      />
      {children}
    </>
  );
};

const trackAnalytics = (
  options: { event: string } & PostEventPayload["properties"],
) => {
  const { track: openTrack } = useOpenPanel();

  if (!isProd) {
    console.log("Track", options);
    return;
  }

  const { event, ...rest } = options;

  openTrack(event, rest);
};

export { AnalyticsProvider, trackAnalytics };
