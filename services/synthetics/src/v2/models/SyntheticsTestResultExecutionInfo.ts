import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultDuration } from "./SyntheticsTestResultDuration";

/**
 * Execution details for a Synthetic test result.
 */
export class SyntheticsTestResultExecutionInfo {
  /**
   * Total duration of a Synthetic test execution.
   */
  "duration"?: SyntheticsTestResultDuration;
  /**
   * Error message if the execution encountered an issue.
   */
  "errorMessage"?: string;
  /**
   * Whether this result is from a fast retry.
   */
  "isFastRetry"?: boolean;
  /**
   * Timing breakdown of the test execution in milliseconds.
   */
  "timings"?: { [key: string]: any };
  /**
   * Whether the test was executed through a tunnel.
   */
  "tunnel"?: boolean;
  /**
   * Whether the location was unhealthy during execution.
   */
  "unhealthy"?: boolean;
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
    duration: {
      baseName: "duration",
      type: "SyntheticsTestResultDuration",
    },
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    isFastRetry: {
      baseName: "is_fast_retry",
      type: "boolean",
    },
    timings: {
      baseName: "timings",
      type: "{ [key: string]: any; }",
    },
    tunnel: {
      baseName: "tunnel",
      type: "boolean",
    },
    unhealthy: {
      baseName: "unhealthy",
      type: "boolean",
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
    return SyntheticsTestResultExecutionInfo.attributeTypeMap;
  }

  public constructor() {}
}
