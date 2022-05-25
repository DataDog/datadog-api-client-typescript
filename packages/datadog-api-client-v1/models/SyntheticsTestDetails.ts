/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Creator } from "./Creator";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsTestConfig } from "./SyntheticsTestConfig";
import { SyntheticsTestDetailsSubType } from "./SyntheticsTestDetailsSubType";
import { SyntheticsTestDetailsType } from "./SyntheticsTestDetailsType";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

import { AttributeTypeMap } from "../util";

/**
 * Object containing details about your Synthetic test.
 */
export class SyntheticsTestDetails {
  /**
   * Configuration object for a Synthetic test.
   */
  "config"?: SyntheticsTestConfig;
  /**
   * Object describing the creator of the shared element.
   */
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
  /**
   * Object describing the extra options for a Synthetic test.
   */
  "options"?: SyntheticsTestOptions;
  /**
   * The test public ID.
   */
  "publicId"?: string;
  /**
   * Define whether you want to start (`live`) or pause (`paused`) a
   * Synthetic test.
   */
  "status"?: SyntheticsTestPauseStatus;
  /**
   * For browser test, the steps of the test.
   */
  "steps"?: Array<SyntheticsStep>;
  /**
   * The subtype of the Synthetic API test, `http`, `ssl`, `tcp`,
   * `dns`, `icmp`, `udp`, `websocket` or `multi`.
   */
  "subtype"?: SyntheticsTestDetailsSubType;
  /**
   * Array of tags attached to the test.
   */
  "tags"?: Array<string>;
  /**
   * Type of the Synthetic test, either `api` or `browser`.
   */
  "type"?: SyntheticsTestDetailsType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestDetails.attributeTypeMap;
  }

  public constructor() {}
}
