import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Alert thresholds of a Product Analytics monitor.
 * Keep `critical` in sync with the comparison in the monitor query; the query is not derived from these values.
 */
export class ProductAnalyticsMonitorThresholds {
  /**
   * Value that triggers a critical alert.
   */
  "critical"?: number;
  /**
   * Value at which a critical alert recovers.
   */
  "criticalRecovery"?: number;
  /**
   * Value that triggers a warning.
   */
  "warning"?: number;
  /**
   * Value at which a warning recovers.
   */
  "warningRecovery"?: number;
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
    critical: {
      baseName: "critical",
      type: "number",
      format: "double",
    },
    criticalRecovery: {
      baseName: "critical_recovery",
      type: "number",
      format: "double",
    },
    warning: {
      baseName: "warning",
      type: "number",
      format: "double",
    },
    warningRecovery: {
      baseName: "warning_recovery",
      type: "number",
      format: "double",
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
    return ProductAnalyticsMonitorThresholds.attributeTypeMap;
  }

  public constructor() {}
}
