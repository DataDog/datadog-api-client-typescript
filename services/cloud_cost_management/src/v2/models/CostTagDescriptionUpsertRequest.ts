import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagDescriptionUpsertRequestData } from "./CostTagDescriptionUpsertRequestData";

/**
 * Request body for creating or updating a Cloud Cost Management tag key description.
 */
export class CostTagDescriptionUpsertRequest {
  /**
   * Resource envelope carrying the tag key description being upserted. The `id` is informational; the authoritative tag key is taken from the URL path.
   */
  "data": CostTagDescriptionUpsertRequestData;
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
    data: {
      baseName: "data",
      type: "CostTagDescriptionUpsertRequestData",
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
    return CostTagDescriptionUpsertRequest.attributeTypeMap;
  }

  public constructor() {}
}
