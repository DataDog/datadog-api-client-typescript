import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionFilterType } from "./RumRetentionFilterType";
import { RumRetentionFilterUpdateAttributes } from "./RumRetentionFilterUpdateAttributes";

/**
 * The new RUM retention filter properties to update.
 */
export class RumRetentionFilterUpdateData {
  /**
   * The object describing attributes of a RUM retention filter to update.
   */
  "attributes": RumRetentionFilterUpdateAttributes;
  /**
   * ID of retention filter in UUID.
   */
  "id": string;
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
      type: "RumRetentionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return RumRetentionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
