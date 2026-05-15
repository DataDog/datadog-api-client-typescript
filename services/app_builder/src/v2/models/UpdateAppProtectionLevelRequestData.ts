import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppProtectionLevelType } from "./AppProtectionLevelType";
import { UpdateAppProtectionLevelRequestDataAttributes } from "./UpdateAppProtectionLevelRequestDataAttributes";

/**
 * Data for updating an app's publication protection level.
 */
export class UpdateAppProtectionLevelRequestData {
  /**
   * Attributes for updating an app's publication protection level.
   */
  "attributes"?: UpdateAppProtectionLevelRequestDataAttributes;
  /**
   * The protection-level resource type.
   */
  "type"?: AppProtectionLevelType;
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
    attributes: {
      baseName: "attributes",
      type: "UpdateAppProtectionLevelRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "AppProtectionLevelType",
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
    return UpdateAppProtectionLevelRequestData.attributeTypeMap;
  }

  public constructor() {}
}
