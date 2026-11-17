import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { DeviceAttributes } from "./DeviceAttributes";
import { DeviceAttributesInterfaceStatuses } from "./DeviceAttributesInterfaceStatuses";
import { DeviceTagsBySource } from "./DeviceTagsBySource";
import { DevicesListData } from "./DevicesListData";
import { GetDeviceAttributes } from "./GetDeviceAttributes";
import { GetDeviceData } from "./GetDeviceData";
import { GetDeviceResponse } from "./GetDeviceResponse";
import { GetInterfacesData } from "./GetInterfacesData";
import { GetInterfacesResponse } from "./GetInterfacesResponse";
import { InterfaceAttributes } from "./InterfaceAttributes";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListDevicesResponse } from "./ListDevicesResponse";
import { ListDevicesResponseMetadata } from "./ListDevicesResponseMetadata";
import { ListDevicesResponseMetadataPage } from "./ListDevicesResponseMetadataPage";
import { ListInterfaceTagsResponse } from "./ListInterfaceTagsResponse";
import { ListInterfaceTagsResponseData } from "./ListInterfaceTagsResponseData";
import { ListTagsResponse } from "./ListTagsResponse";
import { ListTagsResponseData } from "./ListTagsResponseData";
import { ListTagsResponseDataAttributes } from "./ListTagsResponseDataAttributes";
import { SingleAggregatedConnectionResponseArray } from "./SingleAggregatedConnectionResponseArray";
import { SingleAggregatedConnectionResponseData } from "./SingleAggregatedConnectionResponseData";
import { SingleAggregatedConnectionResponseDataAttributes } from "./SingleAggregatedConnectionResponseDataAttributes";
import { SingleAggregatedDnsResponseArray } from "./SingleAggregatedDnsResponseArray";
import { SingleAggregatedDnsResponseData } from "./SingleAggregatedDnsResponseData";
import { SingleAggregatedDnsResponseDataAttributes } from "./SingleAggregatedDnsResponseDataAttributes";
import { SingleAggregatedDnsResponseDataAttributesGroupByItems } from "./SingleAggregatedDnsResponseDataAttributesGroupByItems";
import { SingleAggregatedDnsResponseDataAttributesMetricsItems } from "./SingleAggregatedDnsResponseDataAttributesMetricsItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DnsMetricKey: [
      "dns_total_requests",
      "dns_failures",
      "dns_successful_responses",
      "dns_failed_responses",
      "dns_timeouts",
      "dns_responses.nxdomain",
      "dns_responses.servfail",
      "dns_responses.other",
      "dns_success_latency_percentile",
      "dns_failure_latency_percentile",
    ],
    InterfaceAttributesStatus: ["up", "down", "warning", "off"],
    SingleAggregatedConnectionResponseDataType: ["aggregated_connection"],
    SingleAggregatedDnsResponseDataType: ["aggregated_dns"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DeviceAttributes: DeviceAttributes,
    DeviceAttributesInterfaceStatuses: DeviceAttributesInterfaceStatuses,
    DeviceTagsBySource: DeviceTagsBySource,
    DevicesListData: DevicesListData,
    GetDeviceAttributes: GetDeviceAttributes,
    GetDeviceData: GetDeviceData,
    GetDeviceResponse: GetDeviceResponse,
    GetInterfacesData: GetInterfacesData,
    GetInterfacesResponse: GetInterfacesResponse,
    InterfaceAttributes: InterfaceAttributes,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListDevicesResponse: ListDevicesResponse,
    ListDevicesResponseMetadata: ListDevicesResponseMetadata,
    ListDevicesResponseMetadataPage: ListDevicesResponseMetadataPage,
    ListInterfaceTagsResponse: ListInterfaceTagsResponse,
    ListInterfaceTagsResponseData: ListInterfaceTagsResponseData,
    ListTagsResponse: ListTagsResponse,
    ListTagsResponseData: ListTagsResponseData,
    ListTagsResponseDataAttributes: ListTagsResponseDataAttributes,
    SingleAggregatedConnectionResponseArray:
      SingleAggregatedConnectionResponseArray,
    SingleAggregatedConnectionResponseData:
      SingleAggregatedConnectionResponseData,
    SingleAggregatedConnectionResponseDataAttributes:
      SingleAggregatedConnectionResponseDataAttributes,
    SingleAggregatedDnsResponseArray: SingleAggregatedDnsResponseArray,
    SingleAggregatedDnsResponseData: SingleAggregatedDnsResponseData,
    SingleAggregatedDnsResponseDataAttributes:
      SingleAggregatedDnsResponseDataAttributes,
    SingleAggregatedDnsResponseDataAttributesGroupByItems:
      SingleAggregatedDnsResponseDataAttributesGroupByItems,
    SingleAggregatedDnsResponseDataAttributesMetricsItems:
      SingleAggregatedDnsResponseDataAttributesMetricsItems,
  },
};
