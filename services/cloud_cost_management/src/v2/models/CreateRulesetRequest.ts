import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateRulesetRequestData } from "./CreateRulesetRequestData";

/**
 * The definition of `CreateRulesetRequest` object.
 */
export class CreateRulesetRequest {
  /**
   * The definition of `CreateRulesetRequestData` object.
   */
  "data"?: CreateRulesetRequestData;
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
      type: "CreateRulesetRequestData",
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
    return CreateRulesetRequest.attributeTypeMap;
  }

  public constructor() {}
}
