import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAuthorizedClientData } from "./UserAuthorizedClientData";

/**
 * Response containing a single user authorized client.
 */
export class UserAuthorizedClientResponse {
  /**
   * Data object representing a user authorized client.
   */
  "data": UserAuthorizedClientData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "UserAuthorizedClientData",
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
    return UserAuthorizedClientResponse.attributeTypeMap;
  }

  public constructor() {}
}
