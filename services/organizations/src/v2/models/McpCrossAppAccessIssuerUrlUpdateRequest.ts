import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { McpCrossAppAccessIssuerUrlUpdateData } from "./McpCrossAppAccessIssuerUrlUpdateData";

/**
 * A request to update the MCP Cross-App Access issuer URL for an organization.
 */
export class McpCrossAppAccessIssuerUrlUpdateRequest {
  /**
   * The data object for an MCP Cross-App Access issuer URL update request.
   */
  "data": McpCrossAppAccessIssuerUrlUpdateData;
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
      type: "McpCrossAppAccessIssuerUrlUpdateData",
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
    return McpCrossAppAccessIssuerUrlUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
