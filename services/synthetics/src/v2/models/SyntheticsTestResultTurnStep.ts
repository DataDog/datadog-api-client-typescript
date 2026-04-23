import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultBucketKeys } from "./SyntheticsTestResultBucketKeys";

/**
 * A step executed during a goal-based browser test turn.
 */
export class SyntheticsTestResultTurnStep {
  /**
   * Storage bucket keys for artifacts produced during a step or test.
   */
  "bucketKeys"?: SyntheticsTestResultBucketKeys;
  /**
   * Browser step configuration for this turn step.
   */
  "config"?: { [key: string]: any };
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
    bucketKeys: {
      baseName: "bucket_keys",
      type: "SyntheticsTestResultBucketKeys",
    },
    config: {
      baseName: "config",
      type: "{ [key: string]: any; }",
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
    return SyntheticsTestResultTurnStep.attributeTypeMap;
  }

  public constructor() {}
}
