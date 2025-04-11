import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafExclusionFilterRulesTargetTags } from "./ApplicationSecurityWafExclusionFilterRulesTargetTags";

/**
 * Target WAF rules based either on an identifier or tags.
 */
export class ApplicationSecurityWafExclusionFilterRulesTarget {
  /**
   * Target a single WAF rule based on its identifier.
   */
  "ruleId"?: string;
  /**
   * Target multiple WAF rules based on their tags.
   */
  "tags"?: ApplicationSecurityWafExclusionFilterRulesTargetTags;
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
    ruleId: {
      baseName: "rule_id",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "ApplicationSecurityWafExclusionFilterRulesTargetTags",
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
    return ApplicationSecurityWafExclusionFilterRulesTarget.attributeTypeMap;
  }

  public constructor() {}
}
