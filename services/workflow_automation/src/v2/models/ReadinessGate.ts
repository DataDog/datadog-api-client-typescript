import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReadinessGateThresholdType } from "./ReadinessGateThresholdType";

/**
 * Used to merge multiple branches into a single branch.
 */
export class ReadinessGate {
  /**
   * The definition of `ReadinessGateThresholdType` object.
   */
  "thresholdType": ReadinessGateThresholdType;
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
    thresholdType: {
      baseName: "thresholdType",
      type: "ReadinessGateThresholdType",
      required: true,
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
    return ReadinessGate.attributeTypeMap;
  }

  public constructor() {}
}
