import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlakyTestsSearchFilter } from "./FlakyTestsSearchFilter";
import { FlakyTestsSearchPageOptions } from "./FlakyTestsSearchPageOptions";
import { FlakyTestsSearchSort } from "./FlakyTestsSearchSort";

/**
 * Attributes for the flaky tests search request.
 */
export class FlakyTestsSearchRequestAttributes {
  /**
   * Search filter settings.
   */
  "filter"?: FlakyTestsSearchFilter;
  /**
   * Pagination attributes for listing flaky tests.
   */
  "page"?: FlakyTestsSearchPageOptions;
  /**
   * Parameter for sorting flaky test results. The default sort is by ascending Fully Qualified Name (FQN). The FQN is the concatenation of the test module, suite, and name.
   */
  "sort"?: FlakyTestsSearchSort;
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
    filter: {
      baseName: "filter",
      type: "FlakyTestsSearchFilter",
    },
    page: {
      baseName: "page",
      type: "FlakyTestsSearchPageOptions",
    },
    sort: {
      baseName: "sort",
      type: "FlakyTestsSearchSort",
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
    return FlakyTestsSearchRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
