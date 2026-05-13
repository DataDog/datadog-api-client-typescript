import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagKeyAttributes } from "./CostTagKeyAttributes";
import { CostTagKeyType } from "./CostTagKeyType";

/**
 * A Cloud Cost Management tag key.
 */
export class CostTagKey {
  /**
   * Attributes of a Cloud Cost Management tag key.
   */
  "attributes": CostTagKeyAttributes;
  /**
   * The tag key identifier.
   */
  "id": string;
  /**
   * Type of the Cloud Cost Management tag key resource.
   */
  "type": CostTagKeyType;
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
      type: "CostTagKeyAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostTagKeyType",
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
    return CostTagKey.attributeTypeMap;
  }

  public constructor() {}
}
