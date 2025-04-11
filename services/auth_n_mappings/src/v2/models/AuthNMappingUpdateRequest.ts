import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuthNMappingUpdateData } from "./AuthNMappingUpdateData";

/**
 * Request to update an AuthN Mapping.
 */
export class AuthNMappingUpdateRequest {
  /**
   * Data for updating an AuthN Mapping.
   */
  "data": AuthNMappingUpdateData;
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
      type: "AuthNMappingUpdateData",
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
    return AuthNMappingUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
