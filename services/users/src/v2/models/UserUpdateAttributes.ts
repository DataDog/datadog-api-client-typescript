import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the edited user.
 */
export class UserUpdateAttributes {
  /**
   * If the user is enabled or disabled.
   */
  "disabled"?: boolean;
  /**
   * The email of the user.
   */
  "email"?: string;
  /**
   * The name of the user.
   */
  "name"?: string;
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
    disabled: {
      baseName: "disabled",
      type: "boolean",
    },
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return UserUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
