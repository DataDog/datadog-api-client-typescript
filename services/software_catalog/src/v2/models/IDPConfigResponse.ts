import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IDPConfigData } from "./IDPConfigData";

/**
 * Response containing IDP configuration value.
 */
export class IDPConfigResponse {
  /**
   * IDP configuration data.
   */
  "data": IDPConfigData;
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
      type: "IDPConfigData",
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
    return IDPConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
