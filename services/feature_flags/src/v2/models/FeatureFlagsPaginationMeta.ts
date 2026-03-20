import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagsPaginationMetaPage } from "./FeatureFlagsPaginationMetaPage";

/**
 * Pagination metadata for feature flags.
 */
export class FeatureFlagsPaginationMeta {
  "page"?: FeatureFlagsPaginationMetaPage;
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
    page: {
      baseName: "page",
      type: "FeatureFlagsPaginationMetaPage",
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
    return FeatureFlagsPaginationMeta.attributeTypeMap;
  }

  public constructor() {}
}
