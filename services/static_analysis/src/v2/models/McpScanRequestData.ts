import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { McpScanRequestDataAttributes } from "./McpScanRequestDataAttributes";
import { McpScanRequestDataType } from "./McpScanRequestDataType";

/**
 * The data object in an MCP SCA scan request, containing the scan attributes and request type.
 */
export class McpScanRequestData {
  /**
   * The attributes of an MCP SCA scan request, describing the libraries to scan and their context.
   */
  "attributes": McpScanRequestDataAttributes;
  /**
   * An optional identifier for this scan request.
   */
  "id"?: string;
  /**
   * The type identifier for MCP SCA scan requests.
   */
  "type": McpScanRequestDataType;
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
      type: "McpScanRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "McpScanRequestDataType",
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
    return McpScanRequestData.attributeTypeMap;
  }

  public constructor() {}
}
