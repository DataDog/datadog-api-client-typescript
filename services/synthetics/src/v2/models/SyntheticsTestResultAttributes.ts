import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultBatch } from "./SyntheticsTestResultBatch";
import { SyntheticsTestResultCI } from "./SyntheticsTestResultCI";
import { SyntheticsTestResultDetail } from "./SyntheticsTestResultDetail";
import { SyntheticsTestResultDevice } from "./SyntheticsTestResultDevice";
import { SyntheticsTestResultGit } from "./SyntheticsTestResultGit";
import { SyntheticsTestResultLocation } from "./SyntheticsTestResultLocation";
import { SyntheticsTestSubType } from "./SyntheticsTestSubType";
import { SyntheticsTestType } from "./SyntheticsTestType";

/**
 * Attributes of a Synthetic test result.
 */
export class SyntheticsTestResultAttributes {
  /**
   * Batch information for the test result.
   */
  "batch"?: SyntheticsTestResultBatch;
  /**
   * CI information associated with the test result.
   */
  "ci"?: SyntheticsTestResultCI;
  /**
   * Device information for the test result (browser and mobile tests).
   */
  "device"?: SyntheticsTestResultDevice;
  /**
   * Git information associated with the test result.
   */
  "git"?: SyntheticsTestResultGit;
  /**
   * Location information for a Synthetic test result.
   */
  "location"?: SyntheticsTestResultLocation;
  /**
   * Full result details for a Synthetic test execution.
   */
  "result"?: SyntheticsTestResultDetail;
  /**
   * Subtype of the Synthetic test that produced this result.
   */
  "testSubType"?: SyntheticsTestSubType;
  /**
   * Type of the Synthetic test that produced this result.
   */
  "testType"?: SyntheticsTestType;
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
    batch: {
      baseName: "batch",
      type: "SyntheticsTestResultBatch",
    },
    ci: {
      baseName: "ci",
      type: "SyntheticsTestResultCI",
    },
    device: {
      baseName: "device",
      type: "SyntheticsTestResultDevice",
    },
    git: {
      baseName: "git",
      type: "SyntheticsTestResultGit",
    },
    location: {
      baseName: "location",
      type: "SyntheticsTestResultLocation",
    },
    result: {
      baseName: "result",
      type: "SyntheticsTestResultDetail",
    },
    testSubType: {
      baseName: "test_sub_type",
      type: "SyntheticsTestSubType",
    },
    testType: {
      baseName: "test_type",
      type: "SyntheticsTestType",
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
    return SyntheticsTestResultAttributes.attributeTypeMap;
  }

  public constructor() {}
}
