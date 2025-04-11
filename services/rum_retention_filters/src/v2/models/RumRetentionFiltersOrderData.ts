import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionFilterType } from "./RumRetentionFilterType";

/**
 * The RUM retention filter data for ordering.
 */
export class RumRetentionFiltersOrderData {
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RumRetentionFiltersOrderData.attributeTypeMap;
  }

  public constructor() {}
}
