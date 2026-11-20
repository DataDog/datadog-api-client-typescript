import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMExclusionFilterCreateAttributes } from "./RUMExclusionFilterCreateAttributes";
import { RUMExclusionFilterType } from "./RUMExclusionFilterType";

/**
 * The new exclusion filter properties to create.
 */
export class RUMExclusionFilterCreateData {
  /**
   * The attributes of an exclusion filter to create.
   */
  "attributes": RUMExclusionFilterCreateAttributes;
  /**
   * The resource type. The value must be `exclusion_filters`.
   */
  "type": RUMExclusionFilterType;
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
      type: "RUMExclusionFilterCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMExclusionFilterType",
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
    return RUMExclusionFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
