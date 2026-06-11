import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { UserAuthorizedClientData } from "./UserAuthorizedClientData";

/**
 * Response containing a list of user authorized clients.
 */
export class UserAuthorizedClientsResponse {
  /**
   * List of user authorized client data objects.
   */
  "data": Array<UserAuthorizedClientData>;
  /**
   * Object describing meta attributes of response.
   */
  "meta": ResponseMetaAttributes;
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
      type: "Array<UserAuthorizedClientData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
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
    return UserAuthorizedClientsResponse.attributeTypeMap;
  }

  public constructor() {}
}
