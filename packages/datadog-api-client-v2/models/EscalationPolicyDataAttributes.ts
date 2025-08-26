/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the main attributes of an escalation policy, such as its name and behavior on policy end.
 */
export class EscalationPolicyDataAttributes {
  /**
   * Specifies the name of the escalation policy.
   */
  "name": string;
  /**
   * Indicates whether the page is automatically resolved when the policy ends.
   */
  "resolvePageOnPolicyEnd"?: boolean;
  /**
   * Specifies how many times the escalation sequence is retried if there is no response.
   */
  "retries"?: number;

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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    resolvePageOnPolicyEnd: {
      baseName: "resolve_page_on_policy_end",
      type: "boolean",
    },
    retries: {
      baseName: "retries",
      type: "number",
      format: "int64",
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
    return EscalationPolicyDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
