import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating an app's favorite status.
 */
export class UpdateAppFavoriteRequestDataAttributes {
  /**
   * Whether the app should be marked as a favorite for the current user.
   */
  "favorite": boolean;
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
    favorite: {
      baseName: "favorite",
      type: "boolean",
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
    return UpdateAppFavoriteRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
