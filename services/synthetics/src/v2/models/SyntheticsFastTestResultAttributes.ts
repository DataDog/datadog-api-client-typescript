import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsFastTestResultDetail } from "./SyntheticsFastTestResultDetail";
import { SyntheticsFastTestResultDevice } from "./SyntheticsFastTestResultDevice";
import { SyntheticsFastTestResultLocation } from "./SyntheticsFastTestResultLocation";
import { SyntheticsFastTestSubType } from "./SyntheticsFastTestSubType";

/**
 * Attributes of the fast test result.
 */
export class SyntheticsFastTestResultAttributes {
  /**
   * Device information for browser-based fast tests.
   */
  "device"?: SyntheticsFastTestResultDevice;
  /**
   * Location from which the fast test was executed.
   */
  "location"?: SyntheticsFastTestResultLocation;
  /**
   * Detailed result data for the fast test run. The exact shape of nested fields
   * (`request`, `response`, `assertions`, etc.) depends on the test subtype.
   */
  "result"?: SyntheticsFastTestResultDetail;
  /**
   * Subtype of the Synthetic test that produced this result.
   */
  "testSubType"?: SyntheticsFastTestSubType;
  /**
   * The type of the Synthetic test that produced this result (for example, `api` or `browser`).
   */
  "testType"?: string;
  /**
   * Version of the test at the time the fast test was triggered.
   */
  "testVersion"?: number;
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
    device: {
      baseName: "device",
      type: "SyntheticsFastTestResultDevice",
    },
    location: {
      baseName: "location",
      type: "SyntheticsFastTestResultLocation",
    },
    result: {
      baseName: "result",
      type: "SyntheticsFastTestResultDetail",
    },
    testSubType: {
      baseName: "test_sub_type",
      type: "SyntheticsFastTestSubType",
    },
    testType: {
      baseName: "test_type",
      type: "string",
    },
    testVersion: {
      baseName: "test_version",
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
    return SyntheticsFastTestResultAttributes.attributeTypeMap;
  }

  public constructor() {}
}
