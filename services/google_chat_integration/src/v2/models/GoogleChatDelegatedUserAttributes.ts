import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Google Chat delegated user attributes.
 */
export class GoogleChatDelegatedUserAttributes {
  /**
   * The delegated user's display name.
   */
  "displayName"?: string;
  /**
   * The delegated user's email address.
   */
  "email"?: string;
  /**
   * The list of features enabled for the delegated user.
   */
  "features"?: Array<string>;
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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    email: {
      baseName: "email",
      type: "string",
    },
    features: {
      baseName: "features",
      type: "Array<string>",
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
    return GoogleChatDelegatedUserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
