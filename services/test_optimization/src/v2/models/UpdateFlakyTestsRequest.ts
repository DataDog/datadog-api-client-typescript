import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateFlakyTestsRequestData } from "./UpdateFlakyTestsRequestData";

/**
 * Request to update the state of multiple flaky tests.
 */
export class UpdateFlakyTestsRequest {
  /**
   * The JSON:API data for updating flaky test states.
   */
  "data": UpdateFlakyTestsRequestData;
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
      type: "UpdateFlakyTestsRequestData",
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
    return UpdateFlakyTestsRequest.attributeTypeMap;
  }

  public constructor() {}
}
