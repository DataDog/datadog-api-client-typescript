import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionFilterCreateAttributes } from "./RumRetentionFilterCreateAttributes";
import { RumRetentionFilterType } from "./RumRetentionFilterType";

/**
 * The new RUM retention filter properties to create.
 */
export class RumRetentionFilterCreateData {
  /**
   * The object describing attributes of a RUM retention filter to create.
   */
  "attributes": RumRetentionFilterCreateAttributes;
  /**
   * The type of the resource. The value should always be retention_filters.
   */
  "type": RumRetentionFilterType;
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
      type: "RumRetentionFilterCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumRetentionFilterType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RumRetentionFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
