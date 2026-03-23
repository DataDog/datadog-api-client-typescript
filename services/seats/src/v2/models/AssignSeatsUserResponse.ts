import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AssignSeatsUserResponseData } from "./AssignSeatsUserResponseData";

/**
 * The response body returned after successfully assigning seats to users.
 */
export class AssignSeatsUserResponse {
  /**
   * The response data object containing attributes of the seat assignment result.
   */
  "data"?: AssignSeatsUserResponseData;
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
      type: "AssignSeatsUserResponseData",
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
    return AssignSeatsUserResponse.attributeTypeMap;
  }

  public constructor() {}
}
