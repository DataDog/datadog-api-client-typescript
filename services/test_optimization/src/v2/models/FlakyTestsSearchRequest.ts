import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlakyTestsSearchRequestData } from "./FlakyTestsSearchRequestData";

/**
 * The request for a flaky tests search.
 */
export class FlakyTestsSearchRequest {
  /**
   * The JSON:API data for flaky tests search request.
   */
  "data"?: FlakyTestsSearchRequestData;
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
      type: "FlakyTestsSearchRequestData",
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
    return FlakyTestsSearchRequest.attributeTypeMap;
  }

  public constructor() {}
}
