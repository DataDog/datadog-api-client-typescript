import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlData } from "./GovernanceControlData";

/**
 * A single governance control.
 */
export class GovernanceControlResponse {
  /**
   * A governance control resource.
   */
  "data": GovernanceControlData;
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
      type: "GovernanceControlData",
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
    return GovernanceControlResponse.attributeTypeMap;
  }

  public constructor() {}
}
