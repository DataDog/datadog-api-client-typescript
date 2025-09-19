import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlakyTestsPagination } from "./FlakyTestsPagination";

/**
 * Metadata for the flaky tests search response.
 */
export class FlakyTestsSearchResponseMeta {
  /**
   * Pagination metadata for flaky tests.
   */
  "pagination"?: FlakyTestsPagination;
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
    pagination: {
      baseName: "pagination",
      type: "FlakyTestsPagination",
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
    return FlakyTestsSearchResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
