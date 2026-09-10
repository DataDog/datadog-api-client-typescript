import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PRCoverageSummaryRequestData } from "./PRCoverageSummaryRequestData";

/**
 * Request object for getting code coverage summary for a pull request.
 */
export class PRCoverageSummaryRequest {
  /**
   * Data object for PR summary request.
   */
  "data": PRCoverageSummaryRequestData;
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
      type: "PRCoverageSummaryRequestData",
      required: true,
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
    return PRCoverageSummaryRequest.attributeTypeMap;
  }

  public constructor() {}
}
