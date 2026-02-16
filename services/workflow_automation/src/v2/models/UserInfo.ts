import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class UserInfo {
  /**
   * The organization name.
   */
  "orgName": string;
  /**
   * The user's email address.
   */
  "userEmail": string;
  /**
   * The user's name.
   */
  "userName"?: string;
  /**
   * The user's UUID.
   */
  "userUuid": string;
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
    orgName: {
      baseName: "orgName",
      type: "string",
      required: true,
    },
    userEmail: {
      baseName: "userEmail",
      type: "string",
      required: true,
    },
    userName: {
      baseName: "userName",
      type: "string",
    },
    userUuid: {
      baseName: "userUUID",
      type: "string",
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
    return UserInfo.attributeTypeMap;
  }

  public constructor() {}
}
