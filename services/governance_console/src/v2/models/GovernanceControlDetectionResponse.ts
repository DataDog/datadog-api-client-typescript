import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlDetectionData } from "./GovernanceControlDetectionData";

/**
 * A single governance control detection.
 */
export class GovernanceControlDetectionResponse {
  /**
   * A governance control detection resource.
   */
  "data": GovernanceControlDetectionData;
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
      type: "GovernanceControlDetectionData",
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
    return GovernanceControlDetectionResponse.attributeTypeMap;
  }

  public constructor() {}
}
