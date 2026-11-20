import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionFilterAttributes } from "./RUMRetentionFilterAttributes";
import { RUMRetentionFilterMeta } from "./RUMRetentionFilterMeta";
import { RUMRetentionFilterType } from "./RUMRetentionFilterType";

/**
 * The RUM retention filter.
 */
export class RUMRetentionFilterData {
  /**
   * The object describing attributes of a RUM retention filter.
   */
  "attributes"?: RUMRetentionFilterAttributes;
  /**
   * ID of retention filter in UUID.
   */
  "id"?: string;
  /**
   * Metadata about the retention filter.
   */
  "meta"?: RUMRetentionFilterMeta;
  /**
   * The type of the resource. The value should always be retention_filters.
   */
  "type"?: RUMRetentionFilterType;
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
      type: "RUMRetentionFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "RUMRetentionFilterMeta",
    },
    type: {
      baseName: "type",
      type: "RUMRetentionFilterType",
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
    return RUMRetentionFilterData.attributeTypeMap;
  }

  public constructor() {}
}
