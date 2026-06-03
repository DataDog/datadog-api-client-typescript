/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { McpScanRequestData } from "./McpScanRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The top-level request object for submitting an MCP SCA dependency scan.
 */
export class McpScanRequest {
  /**
   * The data object in an MCP SCA scan request, containing the scan attributes and request type.
   */
  "data": McpScanRequestData;

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
      type: "McpScanRequestData",
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
    return McpScanRequest.attributeTypeMap;
  }

  public constructor() {}
}
