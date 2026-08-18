import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumExclusionFilterCreateAttributes } from "./RumExclusionFilterCreateAttributes";
import { RumExclusionFilterType } from "./RumExclusionFilterType";

/**
 * The new exclusion filter properties to create.
 */
export class RumExclusionFilterCreateData {
  /**
   * The attributes of an exclusion filter to create.
   */
  "attributes": RumExclusionFilterCreateAttributes;
  /**
   * The resource type. The value must be `exclusion_filters`.
   */
  "type": RumExclusionFilterType;
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
      type: "RumExclusionFilterCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumExclusionFilterType",
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
    return RumExclusionFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
