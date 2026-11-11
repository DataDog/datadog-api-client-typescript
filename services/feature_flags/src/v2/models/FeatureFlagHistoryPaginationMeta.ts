import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagHistoryPaginationMetaPage } from "./FeatureFlagHistoryPaginationMetaPage";

/**
 * Pagination metadata for feature flag change history.
 */
export class FeatureFlagHistoryPaginationMeta {
  /**
   * Pagination metadata for feature flag change history responses.
   */
  "page"?: FeatureFlagHistoryPaginationMetaPage;
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
      type: "FeatureFlagHistoryPaginationMetaPage",
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
    return FeatureFlagHistoryPaginationMeta.attributeTypeMap;
  }

  public constructor() {}
}
