import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DeviceAttributes } from "./DeviceAttributes";
import { DeviceAttributesInterfaceStatuses } from "./DeviceAttributesInterfaceStatuses";
import { DevicesListData } from "./DevicesListData";
import { GetDeviceAttributes } from "./GetDeviceAttributes";
import { GetDeviceData } from "./GetDeviceData";
import { GetDeviceResponse } from "./GetDeviceResponse";
import { GetInterfacesData } from "./GetInterfacesData";
import { GetInterfacesResponse } from "./GetInterfacesResponse";
import { InterfaceAttributes } from "./InterfaceAttributes";
import { ListDevicesResponse } from "./ListDevicesResponse";
import { ListDevicesResponseMetadata } from "./ListDevicesResponseMetadata";
import { ListDevicesResponseMetadataPage } from "./ListDevicesResponseMetadataPage";
import { ListTagsResponse } from "./ListTagsResponse";
import { ListTagsResponseData } from "./ListTagsResponseData";
import { ListTagsResponseDataAttributes } from "./ListTagsResponseDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    InterfaceAttributesStatus: ["up", "down", "warning", "off"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DeviceAttributes: DeviceAttributes,
    DeviceAttributesInterfaceStatuses: DeviceAttributesInterfaceStatuses,
    DevicesListData: DevicesListData,
    GetDeviceAttributes: GetDeviceAttributes,
    GetDeviceData: GetDeviceData,
    GetDeviceResponse: GetDeviceResponse,
    GetInterfacesData: GetInterfacesData,
    GetInterfacesResponse: GetInterfacesResponse,
    InterfaceAttributes: InterfaceAttributes,
    ListDevicesResponse: ListDevicesResponse,
    ListDevicesResponseMetadata: ListDevicesResponseMetadata,
    ListDevicesResponseMetadataPage: ListDevicesResponseMetadataPage,
    ListTagsResponse: ListTagsResponse,
    ListTagsResponseData: ListTagsResponseData,
    ListTagsResponseDataAttributes: ListTagsResponseDataAttributes,
  },
};
