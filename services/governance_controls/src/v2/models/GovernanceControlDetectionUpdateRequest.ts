import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlDetectionUpdateData } from "./GovernanceControlDetectionUpdateData";

/**
 * A request to update a governance control detection.
 */
export class GovernanceControlDetectionUpdateRequest {
  /**
   * The data of a governance control detection update request.
   */
  "data": GovernanceControlDetectionUpdateData;
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
      type: "GovernanceControlDetectionUpdateData",
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
    return GovernanceControlDetectionUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
