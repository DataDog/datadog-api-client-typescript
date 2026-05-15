import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppProtectionLevel } from "./AppProtectionLevel";

/**
 * Attributes for updating an app's publication protection level.
 */
export class UpdateAppProtectionLevelRequestDataAttributes {
  /**
   * The publication protection level of the app. `approval_required` means changes must go through an approval workflow before being published.
   */
  "protectionLevel": AppProtectionLevel;
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
    protectionLevel: {
      baseName: "protectionLevel",
      type: "AppProtectionLevel",
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
    return UpdateAppProtectionLevelRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
