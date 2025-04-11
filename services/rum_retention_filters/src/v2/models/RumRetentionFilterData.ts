import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionFilterAttributes } from "./RumRetentionFilterAttributes";
import { RumRetentionFilterType } from "./RumRetentionFilterType";

/**
 * The RUM retention filter.
 */
export class RumRetentionFilterData {
  /**
   * The object describing attributes of a RUM retention filter.
   */
  "attributes"?: RumRetentionFilterAttributes;
  /**
   * ID of retention filter in UUID.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be retention_filters.
   */
  "type"?: RumRetentionFilterType;
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
      type: "RumRetentionFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RumRetentionFilterType",
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
    return RumRetentionFilterData.attributeTypeMap;
  }

  public constructor() {}
}
