import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateOutcomesAsyncRequestData } from "./UpdateOutcomesAsyncRequestData";

/**
 * Scorecard outcomes batch request.
 */
export class UpdateOutcomesAsyncRequest {
  /**
   * Scorecard outcomes batch request data.
   */
  "data"?: UpdateOutcomesAsyncRequestData;
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
      type: "UpdateOutcomesAsyncRequestData",
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
    return UpdateOutcomesAsyncRequest.attributeTypeMap;
  }

  public constructor() {}
}
