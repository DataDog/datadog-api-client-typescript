import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipInferenceListData } from "./OwnershipInferenceListData";

/**
 * The response returned when listing all current ownership inferences for a resource.
 */
export class OwnershipInferenceListResponse {
  /**
   * The data wrapper for the ownership inferences collection response.
   */
  "data": OwnershipInferenceListData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "OwnershipInferenceListData",
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
    return OwnershipInferenceListResponse.attributeTypeMap;
  }

  public constructor() {}
}
