import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DefaultRulesetsPerLanguageData } from "./DefaultRulesetsPerLanguageData";

/**
 * The response payload containing the default ruleset names for a programming language.
 */
export class DefaultRulesetsPerLanguageResponse {
  /**
   * The primary data object in the default rulesets per language response.
   */
  "data": DefaultRulesetsPerLanguageData;
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
      type: "DefaultRulesetsPerLanguageData",
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
    return DefaultRulesetsPerLanguageResponse.attributeTypeMap;
  }

  public constructor() {}
}
