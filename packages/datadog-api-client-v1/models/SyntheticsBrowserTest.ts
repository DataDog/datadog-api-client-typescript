/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBrowserTestConfig } from "./SyntheticsBrowserTestConfig";
import { SyntheticsBrowserTestType } from "./SyntheticsBrowserTestType";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

export class SyntheticsBrowserTest {
  "config"?: SyntheticsBrowserTestConfig;
  /**
   * Array of locations used to run the test.
   */
  "locations"?: Array<string>;
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
  "name"?: string;
  "options"?: SyntheticsTestOptions;
  /**
   * The public ID of the test.
   */
  "publicId"?: string;
  "status"?: SyntheticsTestPauseStatus;
  /**
   * The steps of the test.
   */
  "steps"?: Array<SyntheticsStep>;
  /**
   * Array of tags attached to the test.
   */
  "tags"?: Array<string>;
  "type"?: SyntheticsBrowserTestType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    config: {
      baseName: "config",
      type: "SyntheticsBrowserTestConfig",
    },
    locations: {
      baseName: "locations",
      type: "Array<string>",
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
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBrowserTestType",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBrowserTest.attributeTypeMap;
  }

  public constructor() {}
}
