import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Downtime duration attributes of a monitor configuration policy.
 */
export class MonitorConfigPolicyDowntimePolicy {
  /**
   * The maximum allowed downtime duration, in milliseconds.
   */
  "maxDurationMs": number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    maxDurationMs: {
      baseName: "max_duration_ms",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorConfigPolicyDowntimePolicy.attributeTypeMap;
  }

  public constructor() {}
}
