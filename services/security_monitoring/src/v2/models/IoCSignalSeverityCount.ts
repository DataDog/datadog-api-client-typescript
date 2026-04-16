import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Count of security signals by severity level.
 */
export class IoCSignalSeverityCount {
  /**
   * Number of signals at this severity level.
   */
  "count"?: number;
  /**
   * Severity level (for example, critical, high, medium, low, info).
   */
  "severity"?: string;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    severity: {
      baseName: "severity",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IoCSignalSeverityCount.attributeTypeMap;
  }

  public constructor() {}
}
