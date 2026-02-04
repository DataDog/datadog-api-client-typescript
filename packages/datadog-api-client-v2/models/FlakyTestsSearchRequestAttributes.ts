/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlakyTestsSearchFilter } from "./FlakyTestsSearchFilter";
import { FlakyTestsSearchPageOptions } from "./FlakyTestsSearchPageOptions";
import { FlakyTestsSearchSort } from "./FlakyTestsSearchSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for the flaky tests search request.
 */
export class FlakyTestsSearchRequestAttributes {
  /**
   * Search filter settings.
   */
  "filter"?: FlakyTestsSearchFilter;
  /**
   * Whether to include the status change history for each flaky test in the response.
   * When set to true, each test will include a `history` array with chronological status changes.
   * Defaults to false.
   */
  "includeHistory"?: boolean;
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
    includeHistory: {
      baseName: "include_history",
      type: "boolean",
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
