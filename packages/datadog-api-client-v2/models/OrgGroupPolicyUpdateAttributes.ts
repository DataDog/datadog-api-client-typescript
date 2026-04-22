/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPolicyEnforcementTier } from "./OrgGroupPolicyEnforcementTier";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating an org group policy.
 */
export class OrgGroupPolicyUpdateAttributes {
  /**
   * The policy content as key-value pairs.
   */
  "content"?: { [key: string]: any };
  /**
   * The enforcement tier of the policy. `DEFAULT` means the policy is set but member orgs may mutate it. `ENFORCE` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value.
   */
  "enforcementTier"?: OrgGroupPolicyEnforcementTier;

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
    content: {
      baseName: "content",
      type: "{ [key: string]: any; }",
    },
    enforcementTier: {
      baseName: "enforcement_tier",
      type: "OrgGroupPolicyEnforcementTier",
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
    return OrgGroupPolicyUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
