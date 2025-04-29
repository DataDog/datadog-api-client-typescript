import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomFrameworkRequirement } from "./CustomFrameworkRequirement";

/**
 * Full Framework Data Attributes.
 */
export class FullCustomFrameworkDataAttributes {
  /**
   * Framework Description
   */
  "description": string;
  /**
   * Framework Handle
   */
  "handle": string;
  /**
   * Framework Icon URL
   */
  "iconUrl": string;
  /**
   * Framework Name
   */
  "name": string;
  /**
   * Framework Requirements
   */
  "requirements": Array<CustomFrameworkRequirement>;
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
      required: true,
    },
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    iconUrl: {
      baseName: "icon_url",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    requirements: {
      baseName: "requirements",
      type: "Array<CustomFrameworkRequirement>",
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
    return FullCustomFrameworkDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
