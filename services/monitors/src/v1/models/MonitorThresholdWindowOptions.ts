import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Alerting time window options.
 */
export class MonitorThresholdWindowOptions {
  /**
   * Describes how long an anomalous metric must be normal before the alert recovers.
   */
  "recoveryWindow"?: string;
  /**
   * Describes how long a metric must be anomalous before an alert triggers.
   */
  "triggerWindow"?: string;
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
    recoveryWindow: {
      baseName: "recovery_window",
      type: "string",
    },
    triggerWindow: {
      baseName: "trigger_window",
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
    return MonitorThresholdWindowOptions.attributeTypeMap;
  }

  public constructor() {}
}
