import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IDPConfigRequestData } from "./IDPConfigRequestData";

/**
 * Request to set IDP configuration value.
 */
export class IDPConfigRequest {
  /**
   * IDP configuration request data.
   */
  "data": IDPConfigRequestData;
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
      type: "IDPConfigRequestData",
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
    return IDPConfigRequest.attributeTypeMap;
  }

  public constructor() {}
}
