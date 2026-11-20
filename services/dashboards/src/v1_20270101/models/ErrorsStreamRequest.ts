import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ErrorsStreamQuery } from "./ErrorsStreamQuery";
import { ErrorsStreamRequestColumnsItems } from "./ErrorsStreamRequestColumnsItems";
import { ErrorsStreamRequestResponseFormat } from "./ErrorsStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ErrorsStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<ErrorsStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": ErrorsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ErrorsStreamRequestResponseFormat;
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
      type: "Array<ErrorsStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "ErrorsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ErrorsStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ErrorsStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
