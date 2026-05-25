import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRulesetUpdateData } from "./AiCustomRulesetUpdateData";

/**
 * Request body for updating an AI custom ruleset.
 */
export class AiCustomRulesetUpdateRequest {
  /**
   * Request data for updating an AI custom ruleset.
   */
  "data"?: AiCustomRulesetUpdateData;
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
      type: "AiCustomRulesetUpdateData",
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
    return AiCustomRulesetUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
