import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateFeatureFlagAttributes } from "./UpdateFeatureFlagAttributes";
import { UpdateFeatureFlagDataType } from "./UpdateFeatureFlagDataType";

/**
 * Data for updating a feature flag.
 */
export class UpdateFeatureFlagData {
  /**
   * Attributes for updating a feature flag.
   */
  "attributes": UpdateFeatureFlagAttributes;
  /**
   * The resource type.
   */
  "type": UpdateFeatureFlagDataType;
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
      type: "UpdateFeatureFlagAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UpdateFeatureFlagDataType",
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
    return UpdateFeatureFlagData.attributeTypeMap;
  }

  public constructor() {}
}
