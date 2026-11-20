import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentsStreamQuery } from "./IncidentsStreamQuery";
import { IncidentsStreamRequestColumnsItems } from "./IncidentsStreamRequestColumnsItems";
import { IncidentsStreamRequestResponseFormat } from "./IncidentsStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class IncidentsStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<IncidentsStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": IncidentsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": IncidentsStreamRequestResponseFormat;
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
      type: "Array<IncidentsStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "IncidentsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "IncidentsStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentsStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
