import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumStreamQuery } from "./RumStreamQuery";
import { RumStreamRequestColumnsItems } from "./RumStreamRequestColumnsItems";
import { RumStreamRequestResponseFormat } from "./RumStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RumStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<RumStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": RumStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": RumStreamRequestResponseFormat;
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
      type: "Array<RumStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "RumStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "RumStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RumStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
