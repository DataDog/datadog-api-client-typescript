import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { McpCrossAppAccessIssuerUrlType } from "./McpCrossAppAccessIssuerUrlType";
import { McpCrossAppAccessIssuerUrlUpdateAttributes } from "./McpCrossAppAccessIssuerUrlUpdateAttributes";

/**
 * The data object for an MCP Cross-App Access issuer URL update request.
 */
export class McpCrossAppAccessIssuerUrlUpdateData {
  /**
   * Attributes for the MCP Cross-App Access issuer URL update request.
   */
  "attributes": McpCrossAppAccessIssuerUrlUpdateAttributes;
  /**
   * Data type of an MCP Cross-App Access issuer URL update.
   */
  "type": McpCrossAppAccessIssuerUrlType;
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
      type: "McpCrossAppAccessIssuerUrlUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "McpCrossAppAccessIssuerUrlType",
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
    return McpCrossAppAccessIssuerUrlUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
