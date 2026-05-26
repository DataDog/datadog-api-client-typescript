import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRulesetRequestData } from "./AiCustomRulesetRequestData";

/**
 * Request body for creating an AI custom ruleset.
 */
export class AiCustomRulesetRequest {
  /**
   * Request data for creating an AI custom ruleset.
   */
  "data"?: AiCustomRulesetRequestData;
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
      type: "AiCustomRulesetRequestData",
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
    return AiCustomRulesetRequest.attributeTypeMap;
  }

  public constructor() {}
}
