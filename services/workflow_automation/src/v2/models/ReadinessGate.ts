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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ReadinessGate.attributeTypeMap;
  }

  public constructor() {}
}
