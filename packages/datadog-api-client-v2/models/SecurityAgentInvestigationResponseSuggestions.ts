/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentInvestigationMitigationSuggestion } from "./SecurityAgentInvestigationMitigationSuggestion";
import { SecurityAgentInvestigationRuleTuningSuggestions } from "./SecurityAgentInvestigationRuleTuningSuggestions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Suggested responses to the signal.
 */
export class SecurityAgentInvestigationResponseSuggestions {
  /**
   * Suggested mitigations, in the order to apply them.
   */
  "mitigationSuggestions"?: Array<SecurityAgentInvestigationMitigationSuggestion>;
  /**
   * Suggestions to tune the detection rule that generated the signal.
   */
  "ruleTuningSuggestions"?: SecurityAgentInvestigationRuleTuningSuggestions;

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
    mitigationSuggestions: {
      baseName: "mitigation_suggestions",
      type: "Array<SecurityAgentInvestigationMitigationSuggestion>",
    },
    ruleTuningSuggestions: {
      baseName: "rule_tuning_suggestions",
      type: "SecurityAgentInvestigationRuleTuningSuggestions",
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
    return SecurityAgentInvestigationResponseSuggestions.attributeTypeMap;
  }

  public constructor() {}
}
