/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { McpScanRequestResponseDataAttributes } from "./McpScanRequestResponseDataAttributes";
import { McpScanRequestResponseDataType } from "./McpScanRequestResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object returned when a scan request has been accepted.
 */
export class McpScanRequestResponseData {
  /**
   * The attributes returned when a scan request has been accepted, containing the job identifier used to poll for results.
   */
  "attributes": McpScanRequestResponseDataAttributes;
  /**
   * The job identifier assigned to the scan.
   */
  "id": string;
  /**
   * The type identifier for MCP SCA scan request responses.
   */
  "type": McpScanRequestResponseDataType;

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
    attributes: {
      baseName: "attributes",
      type: "McpScanRequestResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "McpScanRequestResponseDataType",
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
    return McpScanRequestResponseData.attributeTypeMap;
  }

  public constructor() {}
}
