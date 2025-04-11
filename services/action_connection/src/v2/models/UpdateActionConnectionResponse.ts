import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionConnectionData } from "./ActionConnectionData";

/**
 * The response for an updated connection.
 */
export class UpdateActionConnectionResponse {
  /**
   * Data related to the connection.
   */
  "data"?: ActionConnectionData;
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
      type: "ActionConnectionData",
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
    return UpdateActionConnectionResponse.attributeTypeMap;
  }

  public constructor() {}
}
