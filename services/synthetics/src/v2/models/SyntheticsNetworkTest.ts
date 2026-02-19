import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsNetworkTestConfig } from "./SyntheticsNetworkTestConfig";
import { SyntheticsNetworkTestSubType } from "./SyntheticsNetworkTestSubType";
import { SyntheticsNetworkTestType } from "./SyntheticsNetworkTestType";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

/**
 * Object containing details about a Network Path test.
 */
export class SyntheticsNetworkTest {
  /**
   * Configuration object for a Network Path test.
   */
  "config": SyntheticsNetworkTestConfig;
  /**
   * Array of locations used to run the test. Network Path tests can be run from managed locations to test public endpoints,
   * or from a [Datadog Agent](https://docs.datadoghq.com/synthetics/network_path_tests/#agent-configuration) to test private environments.
   */
  "locations": Array<string>;
  /**
   * Notification message associated with the test.
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
   * The public ID for the test.
   */
  "publicId"?: string;
  /**
   * Define whether you want to start (`live`) or pause (`paused`) a
   * Synthetic test.
   */
  "status"?: SyntheticsTestPauseStatus;
  /**
   * Subtype of the Synthetic Network Path test: `tcp`, `udp`, or `icmp`.
   */
  "subtype"?: SyntheticsNetworkTestSubType;
  /**
   * Array of tags attached to the test.
   */
  "tags"?: Array<string>;
  /**
   * Type of the Synthetic test, `network`.
   */
  "type": SyntheticsNetworkTestType;
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
      type: "SyntheticsNetworkTestConfig",
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
    subtype: {
      baseName: "subtype",
      type: "SyntheticsNetworkTestSubType",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "SyntheticsNetworkTestType",
      required: true,
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
    return SyntheticsNetworkTest.attributeTypeMap;
  }

  public constructor() {}
}
