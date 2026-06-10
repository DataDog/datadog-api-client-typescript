import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipInferenceData } from "./OwnershipInferenceData";

/**
 * The response returned when retrieving a single ownership inference for an owner type.
 */
export class OwnershipInferenceResponse {
  /**
   * The data wrapper for a single ownership inference response.
   */
  "data": OwnershipInferenceData;
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
      type: "OwnershipInferenceData",
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
    return OwnershipInferenceResponse.attributeTypeMap;
  }

  public constructor() {}
}
