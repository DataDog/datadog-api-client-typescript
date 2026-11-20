import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMPermanentRetentionFilterID } from "./RUMPermanentRetentionFilterID";
import { RUMPermanentRetentionFilterType } from "./RUMPermanentRetentionFilterType";
import { RUMPermanentRetentionFilterUpdateAttributes } from "./RUMPermanentRetentionFilterUpdateAttributes";

/**
 * The new permanent RUM retention filter configuration to update.
 */
export class RUMPermanentRetentionFilterUpdateData {
  /**
   * The configuration to update on a permanent RUM retention filter.
   */
  "attributes": RUMPermanentRetentionFilterUpdateAttributes;
  /**
   * The identifier of a permanent RUM retention filter.
   */
  "id": RUMPermanentRetentionFilterID;
  /**
   * The type of the resource. The value should always be `permanent_retention_filters`.
   */
  "type": RUMPermanentRetentionFilterType;
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
      type: "RUMPermanentRetentionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "RUMPermanentRetentionFilterID",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMPermanentRetentionFilterType",
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
    return RUMPermanentRetentionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
