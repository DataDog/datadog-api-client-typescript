import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TraceStreamQuery } from "./TraceStreamQuery";
import { TraceStreamRequestColumnsItems } from "./TraceStreamRequestColumnsItems";
import { TraceStreamRequestResponseFormat } from "./TraceStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TraceStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<TraceStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": TraceStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": TraceStreamRequestResponseFormat;
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
      type: "Array<TraceStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "TraceStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TraceStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TraceStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
