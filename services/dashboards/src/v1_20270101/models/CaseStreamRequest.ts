import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseStreamQuery } from "./CaseStreamQuery";
import { CaseStreamRequestColumnsItems } from "./CaseStreamRequestColumnsItems";
import { CaseStreamRequestResponseFormat } from "./CaseStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CaseStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<CaseStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": CaseStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": CaseStreamRequestResponseFormat;
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
      type: "Array<CaseStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "CaseStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "CaseStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
