import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { ProductAnalyticsServerSideEventError } from "./ProductAnalyticsServerSideEventError";
import { ProductAnalyticsServerSideEventErrors } from "./ProductAnalyticsServerSideEventErrors";
import { ProductAnalyticsServerSideEventItem } from "./ProductAnalyticsServerSideEventItem";
import { ProductAnalyticsServerSideEventItemAccount } from "./ProductAnalyticsServerSideEventItemAccount";
import { ProductAnalyticsServerSideEventItemApplication } from "./ProductAnalyticsServerSideEventItemApplication";
import { ProductAnalyticsServerSideEventItemEvent } from "./ProductAnalyticsServerSideEventItemEvent";
import { ProductAnalyticsServerSideEventItemSession } from "./ProductAnalyticsServerSideEventItemSession";
import { ProductAnalyticsServerSideEventItemUsr } from "./ProductAnalyticsServerSideEventItemUsr";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ProductAnalyticsServerSideEventItemType: ["server"],
  },
  oneOfMap: {},
  typeMap: {
    ProductAnalyticsServerSideEventError: ProductAnalyticsServerSideEventError,
    ProductAnalyticsServerSideEventErrors:
      ProductAnalyticsServerSideEventErrors,
    ProductAnalyticsServerSideEventItem: ProductAnalyticsServerSideEventItem,
    ProductAnalyticsServerSideEventItemAccount:
      ProductAnalyticsServerSideEventItemAccount,
    ProductAnalyticsServerSideEventItemApplication:
      ProductAnalyticsServerSideEventItemApplication,
    ProductAnalyticsServerSideEventItemEvent:
      ProductAnalyticsServerSideEventItemEvent,
    ProductAnalyticsServerSideEventItemSession:
      ProductAnalyticsServerSideEventItemSession,
    ProductAnalyticsServerSideEventItemUsr:
      ProductAnalyticsServerSideEventItemUsr,
  },
};
