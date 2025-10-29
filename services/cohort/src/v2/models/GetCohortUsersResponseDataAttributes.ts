import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortUsersResponseDataAttributesUsersItems } from "./GetCohortUsersResponseDataAttributesUsersItems";

export class GetCohortUsersResponseDataAttributes {
  "users"?: Array<GetCohortUsersResponseDataAttributesUsersItems>;
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
    users: {
      baseName: "users",
      type: "Array<GetCohortUsersResponseDataAttributesUsersItems>",
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
    return GetCohortUsersResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
