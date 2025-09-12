import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateRulesetRequestData } from "./UpdateRulesetRequestData";

/**
 * The definition of `UpdateRulesetRequest` object.
 */
export class UpdateRulesetRequest {
  /**
   * The definition of `UpdateRulesetRequestData` object.
   */
  "data"?: UpdateRulesetRequestData;
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
      type: "UpdateRulesetRequestData",
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
    return UpdateRulesetRequest.attributeTypeMap;
  }

  public constructor() {}
}
