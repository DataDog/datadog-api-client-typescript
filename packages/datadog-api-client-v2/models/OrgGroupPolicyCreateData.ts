/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPolicyCreateAttributes } from "./OrgGroupPolicyCreateAttributes";
import { OrgGroupPolicyCreateRelationships } from "./OrgGroupPolicyCreateRelationships";
import { OrgGroupPolicyType } from "./OrgGroupPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an org group policy.
 */
export class OrgGroupPolicyCreateData {
  /**
   * Attributes for creating an org group policy.
   */
  "attributes": OrgGroupPolicyCreateAttributes;
  /**
   * Relationships for creating a policy.
   */
  "relationships": OrgGroupPolicyCreateRelationships;
  /**
   * Org group policies resource type.
   */
  "type": OrgGroupPolicyType;

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
      type: "OrgGroupPolicyCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupPolicyCreateRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgGroupPolicyType",
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
    return OrgGroupPolicyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
