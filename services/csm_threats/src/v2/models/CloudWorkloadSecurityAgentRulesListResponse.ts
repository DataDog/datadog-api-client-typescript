import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentRuleData } from "./CloudWorkloadSecurityAgentRuleData";

/**
 * Response object that includes a list of Agent rule
 */
export class CloudWorkloadSecurityAgentRulesListResponse {
  /**
   * A list of Agent rules objects
   */
  "data"?: Array<CloudWorkloadSecurityAgentRuleData>;
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
      type: "Array<CloudWorkloadSecurityAgentRuleData>",
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
    return CloudWorkloadSecurityAgentRulesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
