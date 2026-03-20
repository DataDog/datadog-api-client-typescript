import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateFeatureFlagData } from "./CreateFeatureFlagData";

/**
 * Request to create a new feature flag.
 */
export class CreateFeatureFlagRequest {
  /**
   * Data for creating a new feature flag.
   */
  "data": CreateFeatureFlagData;
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
      type: "CreateFeatureFlagData",
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
    return CreateFeatureFlagRequest.attributeTypeMap;
  }

  public constructor() {}
}
