import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipConfidenceLevel } from "./OwnershipConfidenceLevel";

/**
 * The attributes of the ownership settings response.
 */
export class OwnershipSettingsAttributes {
  /**
   * Whether automatic ownership tagging is enabled.
   */
  "autoTag": boolean;
  /**
   * The ownership confidence level.
   */
  "confidenceLevel": OwnershipConfidenceLevel;
  /**
   * The current version of the ownership settings.
   */
  "version": number;
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
    autoTag: {
      baseName: "auto_tag",
      type: "boolean",
      required: true,
    },
    confidenceLevel: {
      baseName: "confidence_level",
      type: "OwnershipConfidenceLevel",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
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
    return OwnershipSettingsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
