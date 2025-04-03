import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBrowserTestConfig } from "./SyntheticsBrowserTestConfig";
import { SyntheticsBrowserTestType } from "./SyntheticsBrowserTestType";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

/**
 * Object containing details about a Synthetic browser test.
 */
export class SyntheticsBrowserTest {
  /**
   * Configuration object for a Synthetic browser test.
   */
  "config": SyntheticsBrowserTestConfig;
  /**
   * Array of locations used to run the test.
   */
  "locations": Array<string>;
  /**
   * Notification message associated with the test. Message can either be text or an empty string.
   */
  "message": string;
  /**
   * The associated monitor ID.
   */
  "monitorId"?: number;
  /**
   * Name of the test.
   */
  "name": string;
  /**
   * Object describing the extra options for a Synthetic test.
   */
  "options": SyntheticsTestOptions;
  /**
   * The public ID of the test.
   */
  "publicId"?: string;
  /**
   * Define whether you want to start (`live`) or pause (`paused`) a
   * Synthetic test.
   */
  "status"?: SyntheticsTestPauseStatus;
  /**
   * Array of steps for the test.
   */
  "steps"?: Array<SyntheticsStep>;
  /**
   * Array of tags attached to the test.
   */
  "tags"?: Array<string>;
  /**
   * Type of the Synthetic test, `browser`.
   */
  "type": SyntheticsBrowserTestType;
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
    config: {
      baseName: "config",
      type: "SyntheticsBrowserTestConfig",
      required: true,
    },
    locations: {
      baseName: "locations",
      type: "Array<string>",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    options: {
      baseName: "options",
      type: "SyntheticsTestOptions",
      required: true,
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SyntheticsTestPauseStatus",
    },
    steps: {
      baseName: "steps",
      type: "Array<SyntheticsStep>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBrowserTestType",
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
    return SyntheticsBrowserTest.attributeTypeMap;
  }

  public constructor() {}
}
