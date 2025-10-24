import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AlertEventAttributes } from "./AlertEventAttributes";
import { AlertEventAttributesLinksItem } from "./AlertEventAttributesLinksItem";
import { AlertEventCustomAttributes } from "./AlertEventCustomAttributes";
import { AlertEventCustomAttributesLinksItems } from "./AlertEventCustomAttributesLinksItems";
import { ChangeEventAttributes } from "./ChangeEventAttributes";
import { ChangeEventAttributesAuthor } from "./ChangeEventAttributesAuthor";
import { ChangeEventAttributesChangedResource } from "./ChangeEventAttributesChangedResource";
import { ChangeEventAttributesImpactedResourcesItem } from "./ChangeEventAttributesImpactedResourcesItem";
import { ChangeEventCustomAttributes } from "./ChangeEventCustomAttributes";
import { ChangeEventCustomAttributesAuthor } from "./ChangeEventCustomAttributesAuthor";
import { ChangeEventCustomAttributesChangedResource } from "./ChangeEventCustomAttributesChangedResource";
import { ChangeEventCustomAttributesImpactedResourcesItems } from "./ChangeEventCustomAttributesImpactedResourcesItems";
import { CreateEventEmailAddressRequest } from "./CreateEventEmailAddressRequest";
import { CreateEventEmailAddressRequestData } from "./CreateEventEmailAddressRequestData";
import { CreateEventEmailAddressRequestDataAttributes } from "./CreateEventEmailAddressRequestDataAttributes";
import { CreateOnCallEventEmailAddressRequest } from "./CreateOnCallEventEmailAddressRequest";
import { CreateOnCallEventEmailAddressRequestData } from "./CreateOnCallEventEmailAddressRequestData";
import { CreateOnCallEventEmailAddressRequestDataAttributes } from "./CreateOnCallEventEmailAddressRequestDataAttributes";
import { Event } from "./Event";
import { EventAttributes } from "./EventAttributes";
import { EventCreateRequest } from "./EventCreateRequest";
import { EventCreateRequestPayload } from "./EventCreateRequestPayload";
import { EventCreateResponse } from "./EventCreateResponse";
import { EventCreateResponseAttributes } from "./EventCreateResponseAttributes";
import { EventCreateResponseAttributesAttributes } from "./EventCreateResponseAttributesAttributes";
import { EventCreateResponseAttributesAttributesEvt } from "./EventCreateResponseAttributesAttributesEvt";
import { EventCreateResponsePayload } from "./EventCreateResponsePayload";
import { EventCreateResponsePayloadLinks } from "./EventCreateResponsePayloadLinks";
import { EventEmailAddressResponse } from "./EventEmailAddressResponse";
import { EventEmailAddressResponseArray } from "./EventEmailAddressResponseArray";
import { EventEmailAddressResponseData } from "./EventEmailAddressResponseData";
import { EventEmailAddressResponseDataAttributes } from "./EventEmailAddressResponseDataAttributes";
import { EventEmailAddressResponseDataRelationships } from "./EventEmailAddressResponseDataRelationships";
import { EventEmailAddressResponseDataRelationshipsUser } from "./EventEmailAddressResponseDataRelationshipsUser";
import { EventEmailAddressResponseDataRelationshipsUserData } from "./EventEmailAddressResponseDataRelationshipsUserData";
import { EventPayload } from "./EventPayload";
import { EventResponse } from "./EventResponse";
import { EventResponseAttributes } from "./EventResponseAttributes";
import { EventSystemAttributes } from "./EventSystemAttributes";
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
import { V2Event } from "./V2Event";
import { V2EventAttributes } from "./V2EventAttributes";
import { V2EventResponse } from "./V2EventResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AlertEventAttributesLinksItemCategory: [
      "runbook",
      "documentation",
      "dashboard",
    ],
    AlertEventAttributesPriority: ["1", "2", "3", "4", "5"],
    AlertEventAttributesStatus: ["warn", "error", "ok"],
    AlertEventCustomAttributesLinksItemsCategory: [
      "runbook",
      "documentation",
      "dashboard",
    ],
    AlertEventCustomAttributesPriority: ["1", "2", "3", "4", "5"],
    AlertEventCustomAttributesStatus: ["warn", "error", "ok"],
    ChangeEventAttributesAuthorType: ["user", "system", "api", "automation"],
    ChangeEventAttributesChangedResourceType: ["feature_flag", "configuration"],
    ChangeEventAttributesImpactedResourcesItemType: ["service"],
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
    EventCategory: ["change", "alert"],
    EventCreateRequestType: ["event"],
    EventEmailsType: ["event_emails"],
    EventPayloadIntegrationId: ["custom-events"],
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
    EventSystemAttributesCategory: ["change", "alert"],
    EventSystemAttributesIntegrationId: ["custom-events"],
    EventType: ["event"],
    EventsSort: ["timestamp", "-timestamp"],
    UsersType: ["users"],
  },
  oneOfMap: {
    EventPayloadAttributes: [
      "ChangeEventCustomAttributes",
      "AlertEventCustomAttributes",
    ],
    V2EventAttributesAttributes: [
      "ChangeEventAttributes",
      "AlertEventAttributes",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AlertEventAttributes: AlertEventAttributes,
    AlertEventAttributesLinksItem: AlertEventAttributesLinksItem,
    AlertEventCustomAttributes: AlertEventCustomAttributes,
    AlertEventCustomAttributesLinksItems: AlertEventCustomAttributesLinksItems,
    ChangeEventAttributes: ChangeEventAttributes,
    ChangeEventAttributesAuthor: ChangeEventAttributesAuthor,
    ChangeEventAttributesChangedResource: ChangeEventAttributesChangedResource,
    ChangeEventAttributesImpactedResourcesItem:
      ChangeEventAttributesImpactedResourcesItem,
    ChangeEventCustomAttributes: ChangeEventCustomAttributes,
    ChangeEventCustomAttributesAuthor: ChangeEventCustomAttributesAuthor,
    ChangeEventCustomAttributesChangedResource:
      ChangeEventCustomAttributesChangedResource,
    ChangeEventCustomAttributesImpactedResourcesItems:
      ChangeEventCustomAttributesImpactedResourcesItems,
    CreateEventEmailAddressRequest: CreateEventEmailAddressRequest,
    CreateEventEmailAddressRequestData: CreateEventEmailAddressRequestData,
    CreateEventEmailAddressRequestDataAttributes:
      CreateEventEmailAddressRequestDataAttributes,
    CreateOnCallEventEmailAddressRequest: CreateOnCallEventEmailAddressRequest,
    CreateOnCallEventEmailAddressRequestData:
      CreateOnCallEventEmailAddressRequestData,
    CreateOnCallEventEmailAddressRequestDataAttributes:
      CreateOnCallEventEmailAddressRequestDataAttributes,
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
    EventCreateResponsePayloadLinks: EventCreateResponsePayloadLinks,
    EventEmailAddressResponse: EventEmailAddressResponse,
    EventEmailAddressResponseArray: EventEmailAddressResponseArray,
    EventEmailAddressResponseData: EventEmailAddressResponseData,
    EventEmailAddressResponseDataAttributes:
      EventEmailAddressResponseDataAttributes,
    EventEmailAddressResponseDataRelationships:
      EventEmailAddressResponseDataRelationships,
    EventEmailAddressResponseDataRelationshipsUser:
      EventEmailAddressResponseDataRelationshipsUser,
    EventEmailAddressResponseDataRelationshipsUserData:
      EventEmailAddressResponseDataRelationshipsUserData,
    EventPayload: EventPayload,
    EventResponse: EventResponse,
    EventResponseAttributes: EventResponseAttributes,
    EventSystemAttributes: EventSystemAttributes,
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
    V2Event: V2Event,
    V2EventAttributes: V2EventAttributes,
    V2EventResponse: V2EventResponse,
  },
};
