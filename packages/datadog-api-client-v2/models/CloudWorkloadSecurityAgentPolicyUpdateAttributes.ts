/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update an existing Cloud Workload Security Agent policy
 */
export class CloudWorkloadSecurityAgentPolicyUpdateAttributes {
  /**
   * The description of the policy
   */
  "description"?: string;
  /**
   * Whether the policy is enabled
   */
  "enabled"?: boolean;
  /**
   * The host tags defining where this policy is deployed
   */
  "hostTags"?: Array<string>;
  /**
   * The name of the policy
   */
  "name"?: string;
  /**
   * The priority of the policy
   */
  "priority"?: number;

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
    description: {
      baseName: "description",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    hostTags: {
      baseName: "hostTags",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudWorkloadSecurityAgentPolicyUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
