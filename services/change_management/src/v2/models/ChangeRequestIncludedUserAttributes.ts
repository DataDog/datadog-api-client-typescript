import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an included user.
 */
export class ChangeRequestIncludedUserAttributes {
  /**
   * The email of the user.
   */
  "email": string;
  /**
   * The handle of the user.
   */
  "handle": string;
  /**
   * The name of the user.
   */
  "name": string;
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
    name: {
      baseName: "name",
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
    return ChangeRequestIncludedUserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
