/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Creator } from "./Creator";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsTestConfig } from "./SyntheticsTestConfig";
import { SyntheticsTestDetailsSubType } from "./SyntheticsTestDetailsSubType";
import { SyntheticsTestDetailsType } from "./SyntheticsTestDetailsType";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object containing details about your Synthetic test.
 */

export class SyntheticsTestDetails {
  "config"?: SyntheticsTestConfig;
  "creator"?: Creator;
  /**
   * Array of locations used to run the test.
   */
  "locations"?: Array<string>;
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
  "name"?: string;
  "options"?: SyntheticsTestOptions;
  /**
   * The test public ID.
   */
  "publicId"?: string;
  "status"?: SyntheticsTestPauseStatus;
  /**
   * For browser test, the steps of the test.
   */
  "steps"?: Array<SyntheticsStep>;
  "subtype"?: SyntheticsTestDetailsSubType;
  /**
   * Array of tags attached to the test.
   */
  "tags"?: Array<string>;
  "type"?: SyntheticsTestDetailsType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    config: {
      baseName: "config",
      type: "SyntheticsTestConfig",
    },
    creator: {
      baseName: "creator",
      type: "Creator",
    },
    locations: {
      baseName: "locations",
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
    },
    options: {
      baseName: "options",
      type: "SyntheticsTestOptions",
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
    subtype: {
      baseName: "subtype",
      type: "SyntheticsTestDetailsSubType",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "SyntheticsTestDetailsType",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestDetails.attributeTypeMap;
  }

  public constructor() {}
}
