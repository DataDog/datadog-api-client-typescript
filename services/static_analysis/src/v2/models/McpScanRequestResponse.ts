import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { McpScanRequestResponseData } from "./McpScanRequestResponseData";

/**
 * The top-level response object returned when an MCP SCA dependency scan request has been accepted.
 */
export class McpScanRequestResponse {
  /**
   * The data object returned when a scan request has been accepted.
   */
  "data": McpScanRequestResponseData;
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
    data: {
      baseName: "data",
      type: "McpScanRequestResponseData",
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
    return McpScanRequestResponse.attributeTypeMap;
  }

  public constructor() {}
}
