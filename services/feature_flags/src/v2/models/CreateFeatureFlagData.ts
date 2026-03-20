import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateFeatureFlagAttributes } from "./CreateFeatureFlagAttributes";
import { CreateFeatureFlagDataType } from "./CreateFeatureFlagDataType";

/**
 * Data for creating a new feature flag.
 */
export class CreateFeatureFlagData {
  /**
   * Attributes for creating a new feature flag.
   */
  "attributes": CreateFeatureFlagAttributes;
  /**
   * The resource type.
   */
  "type": CreateFeatureFlagDataType;
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
      type: "CreateFeatureFlagAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CreateFeatureFlagDataType",
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
    return CreateFeatureFlagData.attributeTypeMap;
  }

  public constructor() {}
}
