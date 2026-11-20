import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionFilterType } from "./RUMRetentionFilterType";
import { RUMRetentionFilterUpdateAttributes } from "./RUMRetentionFilterUpdateAttributes";

/**
 * The new RUM retention filter properties to update.
 */
export class RUMRetentionFilterUpdateData {
  /**
   * The object describing attributes of a RUM retention filter to update.
   */
  "attributes": RUMRetentionFilterUpdateAttributes;
  /**
   * ID of retention filter in UUID.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be retention_filters.
   */
  "type": RUMRetentionFilterType;
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
      type: "RUMRetentionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMRetentionFilterType",
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
    return RUMRetentionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
