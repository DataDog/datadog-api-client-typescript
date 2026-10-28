/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The reason no rule could be generated. Only present when the status is `failed`.
 */
export class SecurityMonitoringRuleProposalError {
  /**
   * The kind of failure.
   * - `translation_error`: no rule could be generated from the input. Reword the input
   *   or add details, then start a new rule proposal.
   * - `internal_error`: the proposal failed because of an internal error. Start a new
   *   rule proposal to try again.
   */
  "kind": string;
  /**
   * A human-readable explanation of why no rule could be generated, when available.
   */
  "message"?: string;
  /**
   * The type of failure within its kind, such as `NoRuleProduced`.
   */
  "type"?: string;

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
    kind: {
      baseName: "kind",
      type: "string",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return SecurityMonitoringRuleProposalError.attributeTypeMap;
  }

  public constructor() {}
}
