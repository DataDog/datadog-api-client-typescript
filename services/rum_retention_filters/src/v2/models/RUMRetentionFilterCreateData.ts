import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionFilterCreateAttributes } from "./RUMRetentionFilterCreateAttributes";
import { RUMRetentionFilterType } from "./RUMRetentionFilterType";

/**
 * The new RUM retention filter properties to create.
 */
export class RUMRetentionFilterCreateData {
  /**
   * The object describing attributes of a RUM retention filter to create.
   */
  "attributes": RUMRetentionFilterCreateAttributes;
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
      type: "RUMRetentionFilterCreateAttributes",
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
    return RUMRetentionFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
