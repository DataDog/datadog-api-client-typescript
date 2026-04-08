import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateRuleResponseData } from "./CreateRuleResponseData";

/**
 * Created rule in response.
 */
export class CreateRuleResponse {
  /**
   * Create rule response data.
   */
  "data"?: CreateRuleResponseData;
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
      type: "CreateRuleResponseData",
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
    return CreateRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
