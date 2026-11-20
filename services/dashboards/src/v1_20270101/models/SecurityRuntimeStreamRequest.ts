import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityRuntimeStreamQuery } from "./SecurityRuntimeStreamQuery";
import { SecurityRuntimeStreamRequestColumnsItems } from "./SecurityRuntimeStreamRequestColumnsItems";
import { SecurityRuntimeStreamRequestResponseFormat } from "./SecurityRuntimeStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SecurityRuntimeStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<SecurityRuntimeStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": SecurityRuntimeStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": SecurityRuntimeStreamRequestResponseFormat;
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
      type: "Array<SecurityRuntimeStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "SecurityRuntimeStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "SecurityRuntimeStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityRuntimeStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
