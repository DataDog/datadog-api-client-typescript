import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an included user.
 */
export class UserIncludedAttributes {
  /**
   * The email address of the user.
   */
  "email": string;
  /**
   * The handle of the user.
   */
  "handle": string;
  /**
   * The icon URL for the user.
   */
  "icon": string;
  /**
   * The name of the user.
   */
  "name": string;
  /**
   * The UUID of the user.
   */
  "uuid": string;
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
    email: {
      baseName: "email",
      type: "string",
      required: true,
    },
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    icon: {
      baseName: "icon",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    uuid: {
      baseName: "uuid",
      type: "string",
      required: true,
      format: "uuid",
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
    return UserIncludedAttributes.attributeTypeMap;
  }

  public constructor() {}
}
