import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityRuntimePatternStreamQuery } from "./SecurityRuntimePatternStreamQuery";
import { SecurityRuntimePatternStreamRequestColumnsItems } from "./SecurityRuntimePatternStreamRequestColumnsItems";
import { SecurityRuntimePatternStreamRequestResponseFormat } from "./SecurityRuntimePatternStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SecurityRuntimePatternStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<SecurityRuntimePatternStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": SecurityRuntimePatternStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": SecurityRuntimePatternStreamRequestResponseFormat;
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
      type: "Array<SecurityRuntimePatternStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "SecurityRuntimePatternStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "SecurityRuntimePatternStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityRuntimePatternStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
