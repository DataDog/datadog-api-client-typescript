import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Search and filter query settings.
 */
export class AuditLogsQueryFilter {
  /**
   * Minimum time for the requested events. Supports date, math, and regular timestamps (in milliseconds).
   */
  "from"?: string;
  /**
   * Search query following the Audit Logs search syntax.
   */
  "query"?: string;
  /**
   * Maximum time for the requested events. Supports date, math, and regular timestamps (in milliseconds).
   */
  "to"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    from: {
      baseName: "from",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    to: {
      baseName: "to",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditLogsQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
