import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Framework without requirements.
 */
export class CustomFrameworkWithoutRequirements {
  /**
   * Framework Description
   */
  "description"?: string;
  /**
   * Framework Handle
   */
  "handle": string;
  /**
   * Framework Icon URL
   */
  "iconUrl"?: string;
  /**
   * Framework Name
   */
  "name": string;
  /**
   * Framework Version
   */
  "version": string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    iconUrl: {
      baseName: "icon_url",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
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
    return CustomFrameworkWithoutRequirements.attributeTypeMap;
  }

  public constructor() {}
}
