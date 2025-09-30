import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlakyTestsSearchRequestAttributes } from "./FlakyTestsSearchRequestAttributes";
import { FlakyTestsSearchRequestDataType } from "./FlakyTestsSearchRequestDataType";

/**
 * The JSON:API data for flaky tests search request.
 */
export class FlakyTestsSearchRequestData {
  /**
   * Attributes for the flaky tests search request.
   */
  "attributes"?: FlakyTestsSearchRequestAttributes;
  /**
   * The definition of `FlakyTestsSearchRequestDataType` object.
   */
  "type"?: FlakyTestsSearchRequestDataType;
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
      type: "FlakyTestsSearchRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "FlakyTestsSearchRequestDataType",
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
    return FlakyTestsSearchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
