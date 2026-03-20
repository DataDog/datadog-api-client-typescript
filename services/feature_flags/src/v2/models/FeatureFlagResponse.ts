import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlag } from "./FeatureFlag";

/**
 * Response containing a feature flag.
 */
export class FeatureFlagResponse {
  /**
   * A feature flag resource.
   */
  "data": FeatureFlag;
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
      type: "FeatureFlag",
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
    return FeatureFlagResponse.attributeTypeMap;
  }

  public constructor() {}
}
