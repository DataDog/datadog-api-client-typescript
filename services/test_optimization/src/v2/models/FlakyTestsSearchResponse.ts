import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlakyTest } from "./FlakyTest";
import { FlakyTestsSearchResponseMeta } from "./FlakyTestsSearchResponseMeta";

/**
 * Response object with flaky tests matching the search request.
 */
export class FlakyTestsSearchResponse {
  /**
   * Array of flaky tests matching the request.
   */
  "data"?: Array<FlakyTest>;
  /**
   * Metadata for the flaky tests search response.
   */
  "meta"?: FlakyTestsSearchResponseMeta;
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
      type: "Array<FlakyTest>",
    },
    meta: {
      baseName: "meta",
      type: "FlakyTestsSearchResponseMeta",
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
    return FlakyTestsSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
