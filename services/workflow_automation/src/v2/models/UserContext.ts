import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserInfo } from "./UserInfo";

export class UserContext {
  "userInfo": UserInfo;
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
    userInfo: {
      baseName: "userInfo",
      type: "UserInfo",
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
    return UserContext.attributeTypeMap;
  }

  public constructor() {}
}
