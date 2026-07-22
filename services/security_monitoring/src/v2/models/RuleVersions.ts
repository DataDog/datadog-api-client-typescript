import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleResponse } from "./SecurityMonitoringRuleResponse";
import { VersionHistoryUpdate } from "./VersionHistoryUpdate";

/**
 * A rule version with a list of updates.
 */
export class RuleVersions {
  /**
   * A list of changes.
   */
  "changes"?: Array<VersionHistoryUpdate>;
  /**
   * Create a new rule.
   */
  "rule"?: SecurityMonitoringRuleResponse;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    changes: {
      baseName: "changes",
      type: "Array<VersionHistoryUpdate>",
    },
    rule: {
      baseName: "rule",
      type: "SecurityMonitoringRuleResponse",
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
    return RuleVersions.attributeTypeMap;
  }

  public constructor() {}
}
