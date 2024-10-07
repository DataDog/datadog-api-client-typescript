/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsMobileStep } from "./SyntheticsMobileStep";
import { SyntheticsMobileTestConfig } from "./SyntheticsMobileTestConfig";
import { SyntheticsMobileTestOptions } from "./SyntheticsMobileTestOptions";
import { SyntheticsMobileTestType } from "./SyntheticsMobileTestType";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing details about a Synthetic mobile test.
 */
export class SyntheticsMobileTest {
  /**
   * Configuration object for a Synthetic mobile test.
   */
  "config": SyntheticsMobileTestConfig;
  /**
   * The `SyntheticsMobileTest` `device_ids`.
   */
  "deviceIds"?: Array<string>;
  /**
   * Notification message associated with the test.
   */
  "message"?: string;
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
  "options": SyntheticsMobileTestOptions;
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
  "steps"?: Array<SyntheticsMobileStep>;
  /**
   * Array of tags attached to the test.
   */
  "tags"?: Array<string>;
  /**
   * Type of the Synthetic test, `mobile`.
   */
  "type": SyntheticsMobileTestType;

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
      type: "SyntheticsMobileTestConfig",
      required: true,
    },
    deviceIds: {
      baseName: "device_ids",
      type: "Array<string>",
    },
    message: {
      baseName: "message",
      type: "string",
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
      type: "SyntheticsMobileTestOptions",
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
      type: "Array<SyntheticsMobileStep>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "SyntheticsMobileTestType",
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
    return SyntheticsMobileTest.attributeTypeMap;
  }

  public constructor() {}
}
