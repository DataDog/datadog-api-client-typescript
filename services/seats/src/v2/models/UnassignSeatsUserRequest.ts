import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UnassignSeatsUserRequestData } from "./UnassignSeatsUserRequestData";

/**
 * The request body for unassigning seats from users for a product code.
 */
export class UnassignSeatsUserRequest {
  /**
   * The request data object containing attributes for unassigning seats from users.
   */
  "data"?: UnassignSeatsUserRequestData;
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
      type: "UnassignSeatsUserRequestData",
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
    return UnassignSeatsUserRequest.attributeTypeMap;
  }

  public constructor() {}
}
