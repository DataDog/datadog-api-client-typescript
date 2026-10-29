/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleProposalResponseAttributes } from "./SecurityMonitoringRuleProposalResponseAttributes";
import { SecurityMonitoringRuleProposalType } from "./SecurityMonitoringRuleProposalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the rule proposal.
 */
export class SecurityMonitoringRuleProposalResponseData {
  /**
   * Attributes of the rule proposal.
   */
  "attributes": SecurityMonitoringRuleProposalResponseAttributes;
  /**
   * The ID of the rule proposal.
   */
  "id": string;
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
      type: "SecurityMonitoringRuleProposalResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return SecurityMonitoringRuleProposalResponseData.attributeTypeMap;
  }

  public constructor() {}
}
