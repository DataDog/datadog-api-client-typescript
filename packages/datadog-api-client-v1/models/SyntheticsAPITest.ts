/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAPITestConfig } from "./SyntheticsAPITestConfig";
import { SyntheticsAPITestType } from "./SyntheticsAPITestType";
import { SyntheticsTestDetailsSubType } from "./SyntheticsTestDetailsSubType";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

import { AttributeTypeMap } from "../util";

/**
 * Object containing details about a Synthetic API test.
 */
export class SyntheticsAPITest {
  /**
   * Configuration object for a Synthetic API test.
   */
  "config": SyntheticsAPITestConfig;
  /**
   * Array of locations used to run the test.
   */
  "locations": Array<string>;
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
  "options": SyntheticsTestOptions;
  /**
   * The public ID for the test.
   */
  "publicId"?: string;
  /**
   * Define whether you want to start (`live`) or pause (`paused`) a
   * Synthetic test.
   */
  "status"?: SyntheticsTestPauseStatus;
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
   * Type of the Synthetic test, `api`.
   */
  "type": SyntheticsAPITestType;

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
      type: "SyntheticsAPITestConfig",
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
      type: "SyntheticsAPITestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsAPITest.attributeTypeMap;
  }

  public constructor() {}
}
