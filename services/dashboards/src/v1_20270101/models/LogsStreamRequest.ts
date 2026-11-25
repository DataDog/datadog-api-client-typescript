import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsStreamQuery } from "./LogsStreamQuery";
import { LogsStreamRequestColumnsItems } from "./LogsStreamRequestColumnsItems";
import { LogsStreamRequestResponseFormat } from "./LogsStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogsStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<LogsStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": LogsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": LogsStreamRequestResponseFormat;
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
      type: "Array<LogsStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "LogsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "LogsStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
