import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAPITestResultData } from "./SyntheticsAPITestResultData";
import { SyntheticsAPITestResultFullCheck } from "./SyntheticsAPITestResultFullCheck";
import { SyntheticsTestMonitorStatus } from "./SyntheticsTestMonitorStatus";

/**
 * Object returned describing a API test result.
 */
export class SyntheticsAPITestResultFull {
  /**
   * Object describing the API test configuration.
   */
  "check"?: SyntheticsAPITestResultFullCheck;
  /**
   * When the API test was conducted.
   */
  "checkTime"?: number;
  /**
   * Version of the API test used.
   */
  "checkVersion"?: number;
  /**
   * Locations for which to query the API test results.
   */
  "probeDc"?: string;
  /**
   * Object containing results for your Synthetic API test.
   */
  "result"?: SyntheticsAPITestResultData;
  /**
   * ID of the API test result.
   */
  "resultId"?: string;
  /**
   * The status of your Synthetic monitor.
   * * `O` for not triggered
   * * `1` for triggered
   * * `2` for no data
   */
  "status"?: SyntheticsTestMonitorStatus;
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
    check: {
      baseName: "check",
      type: "SyntheticsAPITestResultFullCheck",
    },
    checkTime: {
      baseName: "check_time",
      type: "number",
      format: "double",
    },
    checkVersion: {
      baseName: "check_version",
      type: "number",
      format: "int64",
    },
    probeDc: {
      baseName: "probe_dc",
      type: "string",
    },
    result: {
      baseName: "result",
      type: "SyntheticsAPITestResultData",
    },
    resultId: {
      baseName: "result_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SyntheticsTestMonitorStatus",
      format: "int64",
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
    return SyntheticsAPITestResultFull.attributeTypeMap;
  }

  public constructor() {}
}
