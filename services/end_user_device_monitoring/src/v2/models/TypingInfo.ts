import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DeviceBaseArray } from "./DeviceBaseArray";
import { DeviceBaseArrayLinks } from "./DeviceBaseArrayLinks";
import { DeviceBaseArrayMeta } from "./DeviceBaseArrayMeta";
import { DeviceBaseArrayMetaPage } from "./DeviceBaseArrayMetaPage";
import { DeviceBaseData } from "./DeviceBaseData";
import { DeviceBaseDataAttributes } from "./DeviceBaseDataAttributes";
import { DeviceDetails } from "./DeviceDetails";
import { DeviceDetailsData } from "./DeviceDetailsData";
import { DeviceDetailsDataAttributes } from "./DeviceDetailsDataAttributes";
import { DeviceEmployee } from "./DeviceEmployee";
import { DeviceGeoIP } from "./DeviceGeoIP";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DeviceDetailsDataType: ["devices"],
    DeviceStatus: ["healthy", "degraded", "critical", "inactive", "unknown"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DeviceBaseArray: DeviceBaseArray,
    DeviceBaseArrayLinks: DeviceBaseArrayLinks,
    DeviceBaseArrayMeta: DeviceBaseArrayMeta,
    DeviceBaseArrayMetaPage: DeviceBaseArrayMetaPage,
    DeviceBaseData: DeviceBaseData,
    DeviceBaseDataAttributes: DeviceBaseDataAttributes,
    DeviceDetails: DeviceDetails,
    DeviceDetailsData: DeviceDetailsData,
    DeviceDetailsDataAttributes: DeviceDetailsDataAttributes,
    DeviceEmployee: DeviceEmployee,
    DeviceGeoIP: DeviceGeoIP,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
