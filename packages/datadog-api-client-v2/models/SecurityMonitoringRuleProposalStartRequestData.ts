/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleProposalStartRequestAttributes } from "./SecurityMonitoringRuleProposalStartRequestAttributes";
import { SecurityMonitoringRuleProposalType } from "./SecurityMonitoringRuleProposalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the rule proposal to start.
 */
export class SecurityMonitoringRuleProposalStartRequestData {
  /**
   * Attributes of the rule proposal to start.
   */
  "attributes": SecurityMonitoringRuleProposalStartRequestAttributes;
  /**
   * The rule proposal resource type. The value is always `rule_proposals`.
   */
  "type": SecurityMonitoringRuleProposalType;

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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringRuleProposalStartRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleProposalType",
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
    return SecurityMonitoringRuleProposalStartRequestData.attributeTypeMap;
  }

  public constructor() {}
}
