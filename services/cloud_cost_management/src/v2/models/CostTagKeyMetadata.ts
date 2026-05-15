import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagKeyMetadataAttributes } from "./CostTagKeyMetadataAttributes";
import { CostTagKeyMetadataType } from "./CostTagKeyMetadataType";

/**
 * A Cloud Cost Management tag key metadata entry, aggregating coverage and example values for a single tag key, metric, and period.
 */
export class CostTagKeyMetadata {
  /**
   * Attributes of a Cloud Cost Management tag key metadata entry.
   */
  "attributes": CostTagKeyMetadataAttributes;
  /**
   * A composite identifier of the form `tag_key:metric` for monthly roll-ups, or `tag_key:metric:YYYY-MM-DD` when `filter[daily]=true`.
   */
  "id": string;
  /**
   * Type of the Cloud Cost Management tag key metadata resource.
   */
  "type": CostTagKeyMetadataType;
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
      type: "CostTagKeyMetadataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostTagKeyMetadataType",
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
    return CostTagKeyMetadata.attributeTypeMap;
  }

  public constructor() {}
}
