import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Statistics about the number of hops for a network test.
 */
export class SyntheticsTestResultNetstatsHops {
  /**
   * Average number of hops.
   */
  "avg"?: number;
  /**
   * Maximum number of hops.
   */
  "max"?: number;
  /**
   * Minimum number of hops.
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
      format: "int64",
    },
    min: {
      baseName: "min",
      type: "number",
      format: "int64",
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
    return SyntheticsTestResultNetstatsHops.attributeTypeMap;
  }

  public constructor() {}
}
