import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventStreamQuery } from "./EventStreamQuery";
import { EventStreamRequestColumnsItems } from "./EventStreamRequestColumnsItems";
import { EventStreamRequestResponseFormat } from "./EventStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<EventStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": EventStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": EventStreamRequestResponseFormat;
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
      type: "Array<EventStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "EventStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "EventStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
