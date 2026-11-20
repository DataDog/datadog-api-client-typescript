import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuditStreamQuery } from "./AuditStreamQuery";
import { AuditStreamRequestColumnsItems } from "./AuditStreamRequestColumnsItems";
import { AuditStreamRequestResponseFormat } from "./AuditStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AuditStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<AuditStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": AuditStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": AuditStreamRequestResponseFormat;
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
      type: "Array<AuditStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "AuditStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "AuditStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
