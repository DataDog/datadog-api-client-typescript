import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Latency statistics for a network probe.
 */
export class SyntheticsTestResultNetworkLatency {
  /**
   * Average latency in milliseconds.
   */
  "avg"?: number;
  /**
   * Maximum latency in milliseconds.
   */
  "max"?: number;
  /**
   * Minimum latency in milliseconds.
   */
  "min"?: number;
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
    avg: {
      baseName: "avg",
      type: "number",
      format: "double",
    },
    max: {
      baseName: "max",
      type: "number",
      format: "double",
    },
    min: {
      baseName: "min",
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
    return SyntheticsTestResultNetworkLatency.attributeTypeMap;
  }

  public constructor() {}
}
