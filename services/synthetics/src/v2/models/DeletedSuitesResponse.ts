import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeletedSuiteResponseData } from "./DeletedSuiteResponseData";

/**
 * Response containing the list of deleted Synthetic test suites.
 */
export class DeletedSuitesResponse {
  /**
   * List of deleted Synthetic suite data objects.
   */
  "data"?: Array<DeletedSuiteResponseData>;
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
      type: "Array<DeletedSuiteResponseData>",
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
    return DeletedSuitesResponse.attributeTypeMap;
  }

  public constructor() {}
}
