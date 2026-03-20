import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlag } from "./FeatureFlag";
import { FeatureFlagsPaginationMeta } from "./FeatureFlagsPaginationMeta";

/**
 * Response containing a list of feature flags.
 */
export class ListFeatureFlagsResponse {
  /**
   * List of feature flags.
   */
  "data": Array<FeatureFlag>;
  /**
   * Pagination metadata for feature flags.
   */
  "meta"?: FeatureFlagsPaginationMeta;
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
      type: "Array<FeatureFlag>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FeatureFlagsPaginationMeta",
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
    return ListFeatureFlagsResponse.attributeTypeMap;
  }

  public constructor() {}
}
