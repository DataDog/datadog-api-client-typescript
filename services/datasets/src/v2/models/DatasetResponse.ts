import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetAttributesResponse } from "./DatasetAttributesResponse";
import { DatasetType } from "./DatasetType";

/**
 * **Datasets Object Constraints**
 * - **Tag Limit per Dataset**:
 *   - Each restricted dataset supports a maximum of 10 key:value pairs per product.
 *
 * - **Tag Key Rules per Telemetry Type**:
 *   - Only one tag key or attribute may be used to define access within a single telemetry type.
 *   - The same or different tag key may be used across different telemetry types.
 *
 * - **Tag Value Uniqueness**:
 *   - Tag values must be unique within a single dataset.
 *   - A tag value used in one dataset cannot be reused in another dataset of the same telemetry type.
 */
export class DatasetResponse {
  /**
   * Dataset metadata and configuration(s).
   */
  "attributes"?: DatasetAttributesResponse;
  /**
   * Unique identifier for the dataset.
   */
  "id"?: string;
  /**
   * Resource type, always set to `dataset`.
   */
  "type"?: DatasetType;
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
      type: "DatasetAttributesResponse",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DatasetType",
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
    return DatasetResponse.attributeTypeMap;
  }

  public constructor() {}
}
