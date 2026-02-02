/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a policy evaluation result.
 */
export class PolicyResultAttributesResponse {
  /**
   * Whether the policy is active.
   */
  "active": boolean;
  /**
   * The policy configuration payload.
   */
  "payload": any;
  /**
   * The type of policy being evaluated.
   */
  "policyType": string;
  /**
   * The organization UUID reference.
   */
  "referenceOrgUuid": string;

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
    active: {
      baseName: "active",
      type: "boolean",
      required: true,
    },
    payload: {
      baseName: "payload",
      type: "any",
      required: true,
    },
    policyType: {
      baseName: "policy_type",
      type: "string",
      required: true,
    },
    referenceOrgUuid: {
      baseName: "reference_org_uuid",
      type: "string",
      required: true,
      format: "uuid",
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
    return PolicyResultAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
