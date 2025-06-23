import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ChangeEventCustomAttributes } from "./ChangeEventCustomAttributes";
import { ChangeEventCustomAttributesAuthor } from "./ChangeEventCustomAttributesAuthor";
import { ChangeEventCustomAttributesChangedResource } from "./ChangeEventCustomAttributesChangedResource";
import { ChangeEventCustomAttributesImpactedResourcesItems } from "./ChangeEventCustomAttributesImpactedResourcesItems";
import { Event } from "./Event";
import { EventAttributes } from "./EventAttributes";
import { EventCreateRequest } from "./EventCreateRequest";
import { EventCreateRequestPayload } from "./EventCreateRequestPayload";
import { EventCreateResponse } from "./EventCreateResponse";
import { EventCreateResponseAttributes } from "./EventCreateResponseAttributes";
import { EventCreateResponseAttributesAttributes } from "./EventCreateResponseAttributesAttributes";
import { EventCreateResponseAttributesAttributesEvt } from "./EventCreateResponseAttributesAttributesEvt";
import { EventCreateResponsePayload } from "./EventCreateResponsePayload";
import { EventPayload } from "./EventPayload";
import { EventResponse } from "./EventResponse";
import { EventResponseAttributes } from "./EventResponseAttributes";
import { EventsListRequest } from "./EventsListRequest";
import { EventsListResponse } from "./EventsListResponse";
import { EventsListResponseLinks } from "./EventsListResponseLinks";
import { EventsQueryFilter } from "./EventsQueryFilter";
import { EventsQueryOptions } from "./EventsQueryOptions";
import { EventsRequestPage } from "./EventsRequestPage";
import { EventsResponseMetadata } from "./EventsResponseMetadata";
import { EventsResponseMetadataPage } from "./EventsResponseMetadataPage";
import { EventsWarning } from "./EventsWarning";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { MonitorType } from "./MonitorType";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ChangeEventCustomAttributesAuthorType: [
      "user",
      "system",
      "api",
      "automation",
    ],
    ChangeEventCustomAttributesChangedResourceType: [
      "feature_flag",
      "configuration",
    ],
    ChangeEventCustomAttributesImpactedResourcesItemsType: ["service"],
    EventCategory: ["change"],
    EventCreateRequestType: ["event"],
    EventPriority: ["normal", "low"],
    EventStatusType: [
      "failure",
      "error",
      "warning",
      "info",
      "success",
      "user_update",
      "recommendation",
      "snapshot",
    ],
    EventType: ["event"],
    EventsSort: ["timestamp", "-timestamp"],
  },
  oneOfMap: {
    EventPayloadAttributes: ["ChangeEventCustomAttributes"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ChangeEventCustomAttributes: ChangeEventCustomAttributes,
    ChangeEventCustomAttributesAuthor: ChangeEventCustomAttributesAuthor,
    ChangeEventCustomAttributesChangedResource:
      ChangeEventCustomAttributesChangedResource,
    ChangeEventCustomAttributesImpactedResourcesItems:
      ChangeEventCustomAttributesImpactedResourcesItems,
    Event: Event,
    EventAttributes: EventAttributes,
    EventCreateRequest: EventCreateRequest,
    EventCreateRequestPayload: EventCreateRequestPayload,
    EventCreateResponse: EventCreateResponse,
    EventCreateResponseAttributes: EventCreateResponseAttributes,
    EventCreateResponseAttributesAttributes:
      EventCreateResponseAttributesAttributes,
    EventCreateResponseAttributesAttributesEvt:
      EventCreateResponseAttributesAttributesEvt,
    EventCreateResponsePayload: EventCreateResponsePayload,
    EventPayload: EventPayload,
    EventResponse: EventResponse,
    EventResponseAttributes: EventResponseAttributes,
    EventsListRequest: EventsListRequest,
    EventsListResponse: EventsListResponse,
    EventsListResponseLinks: EventsListResponseLinks,
    EventsQueryFilter: EventsQueryFilter,
    EventsQueryOptions: EventsQueryOptions,
    EventsRequestPage: EventsRequestPage,
    EventsResponseMetadata: EventsResponseMetadata,
    EventsResponseMetadataPage: EventsResponseMetadataPage,
    EventsWarning: EventsWarning,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    MonitorType: MonitorType,
  },
};
