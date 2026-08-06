import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlData } from "./GovernanceControlData";

/**
 * A list of governance controls.
 */
export class GovernanceControlsResponse {
  /**
   * An array of governance control resources.
   */
  "data": Array<GovernanceControlData>;
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
      type: "Array<GovernanceControlData>",
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
    return GovernanceControlsResponse.attributeTypeMap;
  }

  public constructor() {}
}
