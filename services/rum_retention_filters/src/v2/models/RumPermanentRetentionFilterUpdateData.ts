import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumPermanentRetentionFilterID } from "./RumPermanentRetentionFilterID";
import { RumPermanentRetentionFilterType } from "./RumPermanentRetentionFilterType";
import { RumPermanentRetentionFilterUpdateAttributes } from "./RumPermanentRetentionFilterUpdateAttributes";

/**
 * The new permanent RUM retention filter configuration to update.
 */
export class RumPermanentRetentionFilterUpdateData {
  /**
   * The configuration to update on a permanent RUM retention filter.
   */
  "attributes": RumPermanentRetentionFilterUpdateAttributes;
  /**
   * The identifier of a permanent RUM retention filter.
   */
  "id": RumPermanentRetentionFilterID;
  /**
   * The type of the resource. The value should always be `permanent_retention_filters`.
   */
  "type": RumPermanentRetentionFilterType;
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
      type: "RumPermanentRetentionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "RumPermanentRetentionFilterID",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumPermanentRetentionFilterType",
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
    return RumPermanentRetentionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
