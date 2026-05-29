import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumPermanentRetentionFilterAttributes } from "./RumPermanentRetentionFilterAttributes";
import { RumPermanentRetentionFilterID } from "./RumPermanentRetentionFilterID";
import { RumPermanentRetentionFilterType } from "./RumPermanentRetentionFilterType";

/**
 * A permanent RUM retention filter.
 */
export class RumPermanentRetentionFilterData {
  /**
   * The attributes of a permanent RUM retention filter.
   */
  "attributes"?: RumPermanentRetentionFilterAttributes;
  /**
   * The identifier of a permanent RUM retention filter.
   */
  "id"?: RumPermanentRetentionFilterID;
  /**
   * The type of the resource. The value should always be `permanent_retention_filters`.
   */
  "type"?: RumPermanentRetentionFilterType;
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
      type: "RumPermanentRetentionFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "RumPermanentRetentionFilterID",
    },
    type: {
      baseName: "type",
      type: "RumPermanentRetentionFilterType",
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
    return RumPermanentRetentionFilterData.attributeTypeMap;
  }

  public constructor() {}
}
