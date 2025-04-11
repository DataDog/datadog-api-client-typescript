import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventResponse } from "./EventResponse";
import { EventsListResponseLinks } from "./EventsListResponseLinks";
import { EventsResponseMetadata } from "./EventsResponseMetadata";

/**
 * The response object with all events matching the request and pagination information.
 */
export class EventsListResponse {
  /**
   * An array of events matching the request.
   */
  "data"?: Array<EventResponse>;
  /**
   * Links attributes.
   */
  "links"?: EventsListResponseLinks;
  /**
   * The metadata associated with a request.
   */
  "meta"?: EventsResponseMetadata;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<EventResponse>",
    },
    links: {
      baseName: "links",
      type: "EventsListResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "EventsResponseMetadata",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
