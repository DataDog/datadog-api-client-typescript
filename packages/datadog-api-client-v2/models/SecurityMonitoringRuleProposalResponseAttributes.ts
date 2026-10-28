/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleProposalError } from "./SecurityMonitoringRuleProposalError";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the rule proposal.
 */
export class SecurityMonitoringRuleProposalResponseAttributes {
  /**
   * The reason no rule could be generated. Only present when the status is `failed`.
   */
  "error"?: SecurityMonitoringRuleProposalError;
  /**
   * The proposed Cloud SIEM detection rule in the same format as the create a detection
   * rule endpoint. It is not saved in Cloud SIEM. Only present when the status is
   * `completed`. Review the rule, then create it with the [create a
   * detection rule](https://docs.datadoghq.com/api/latest/security-monitoring/#create-a-detection-rule)
   * endpoint.
   */
  "rule"?: { [key: string]: any };
  /**
   * The status of the rule proposal. `pending` and `in_progress` mean the proposed rule is
   * still being generated. Poll the endpoint again later. `completed` and `failed` are final:
   * `completed` proposals contain the proposed rule in `rule`, and `failed` proposals
   * contain the reason in `error`.
   */
  "status": string;

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
    error: {
      baseName: "error",
      type: "SecurityMonitoringRuleProposalError",
    },
    rule: {
      baseName: "rule",
      type: "{ [key: string]: any; }",
    },
    status: {
      baseName: "status",
      type: "string",
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
    return SecurityMonitoringRuleProposalResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
