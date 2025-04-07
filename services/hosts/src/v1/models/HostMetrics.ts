import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Host Metrics collected.
 */
export class HostMetrics {
  /**
   * The percent of CPU used (everything but idle).
   */
  "cpu"?: number;
  /**
   * The percent of CPU spent waiting on the IO (not reported for all platforms).
   */
  "iowait"?: number;
  /**
   * The system load over the last 15 minutes.
   */
  "load"?: number;
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
    cpu: {
      baseName: "cpu",
      type: "number",
      format: "double",
    },
    iowait: {
      baseName: "iowait",
      type: "number",
      format: "double",
    },
    load: {
      baseName: "load",
      type: "number",
      format: "double",
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
    return HostMetrics.attributeTypeMap;
  }

  public constructor() {}
}
