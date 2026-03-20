import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateFeatureFlagData } from "./UpdateFeatureFlagData";

/**
 * Request to update a feature flag.
 */
export class UpdateFeatureFlagRequest {
  /**
   * Data for updating a feature flag.
   */
  "data": UpdateFeatureFlagData;
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
      type: "UpdateFeatureFlagData",
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
    return UpdateFeatureFlagRequest.attributeTypeMap;
  }

  public constructor() {}
}
