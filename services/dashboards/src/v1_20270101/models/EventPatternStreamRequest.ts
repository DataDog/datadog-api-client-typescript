import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventPatternStreamQuery } from "./EventPatternStreamQuery";
import { EventPatternStreamRequestColumnsItems } from "./EventPatternStreamRequestColumnsItems";
import { EventPatternStreamRequestResponseFormat } from "./EventPatternStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventPatternStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<EventPatternStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": EventPatternStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": EventPatternStreamRequestResponseFormat;
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
      type: "Array<EventPatternStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "EventPatternStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "EventPatternStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventPatternStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
