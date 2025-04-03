import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Search filters for listing security signals.
 */
export class SecurityMonitoringSignalListRequestFilter {
  /**
   * The minimum timestamp for requested security signals.
   */
  "from"?: Date;
  /**
   * Search query for listing security signals.
   */
  "query"?: string;
  /**
   * The maximum timestamp for requested security signals.
   */
  "to"?: Date;
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
      type: "Date",
      format: "date-time",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    to: {
      baseName: "to",
      type: "Date",
      format: "date-time",
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
    return SecurityMonitoringSignalListRequestFilter.attributeTypeMap;
  }

  public constructor() {}
}
