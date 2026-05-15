import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppVersionNameType } from "./AppVersionNameType";
import { UpdateAppVersionNameRequestDataAttributes } from "./UpdateAppVersionNameRequestDataAttributes";

/**
 * Data for naming a specific app version.
 */
export class UpdateAppVersionNameRequestData {
  /**
   * Attributes for naming a specific app version.
   */
  "attributes"?: UpdateAppVersionNameRequestDataAttributes;
  /**
   * The version-name resource type.
   */
  "type"?: AppVersionNameType;
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
      type: "UpdateAppVersionNameRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "AppVersionNameType",
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
    return UpdateAppVersionNameRequestData.attributeTypeMap;
  }

  public constructor() {}
}
