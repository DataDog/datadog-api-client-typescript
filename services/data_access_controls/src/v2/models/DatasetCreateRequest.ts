import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetRequest } from "./DatasetRequest";

/**
 * Create request for a dataset.
 */
export class DatasetCreateRequest {
  /**
   * **Datasets Object Constraints**
   * - **Tag limit per dataset**:
   *   - Each restricted dataset supports a maximum of 10 key:value pairs per product.
   *
   * - **Tag key rules per telemetry type**:
   *   - Only one tag key or attribute may be used to define access within a single telemetry type.
   *   - The same or different tag key may be used across different telemetry types.
   *
   * - **Tag value uniqueness**:
   *   - Tag values must be unique within a single dataset.
   *   - A tag value used in one dataset cannot be reused in another dataset of the same telemetry type.
   */
  "data": DatasetRequest;
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
      type: "DatasetRequest",
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
    return DatasetCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
