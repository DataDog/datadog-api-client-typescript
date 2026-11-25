import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DoraListStreamQuery } from "./DoraListStreamQuery";
import { DoraListStreamRequestColumnsItems } from "./DoraListStreamRequestColumnsItems";
import { DoraListStreamRequestResponseFormat } from "./DoraListStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DoraListStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<DoraListStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": DoraListStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": DoraListStreamRequestResponseFormat;
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
      type: "Array<DoraListStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "DoraListStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "DoraListStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DoraListStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
