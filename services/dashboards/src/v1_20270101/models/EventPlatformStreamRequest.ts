import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventPlatformStreamRequestColumnsItems } from "./EventPlatformStreamRequestColumnsItems";
import { EventPlatformStreamRequestResponseFormat } from "./EventPlatformStreamRequestResponseFormat";
import { EventsPlatformListStreamQuery } from "./EventsPlatformListStreamQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventPlatformStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<EventPlatformStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": EventsPlatformListStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": EventPlatformStreamRequestResponseFormat;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<EventPlatformStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "EventsPlatformListStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "EventPlatformStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventPlatformStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
