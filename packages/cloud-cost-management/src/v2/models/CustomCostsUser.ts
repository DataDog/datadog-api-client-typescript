import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

/**
 * Metadata of the user that has uploaded the Custom Costs file.
 */
export class CustomCostsUser {
  /**
   * Handle of the user. This is usually the user's email address, but can be another identifier (for example, a UUID for a service account).
   */
  "email"?: string;
  /**
   * Icon of the user.
   */
  "icon"?: string;
  /**
   * Name of the user.
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
    email: {
      baseName: "email",
      type: "string",
    },
    icon: {
      baseName: "icon",
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
    return CustomCostsUser.attributeTypeMap;
  }

  public constructor() {}
}
