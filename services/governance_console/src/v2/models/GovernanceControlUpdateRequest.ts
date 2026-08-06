import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlUpdateData } from "./GovernanceControlUpdateData";

/**
 * A request to update a governance control.
 */
export class GovernanceControlUpdateRequest {
  /**
   * The data of a governance control update request.
   */
  "data": GovernanceControlUpdateData;
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
      type: "GovernanceControlUpdateData",
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
    return GovernanceControlUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
