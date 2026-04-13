/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPolicyRelationshipToOne } from "./OrgGroupPolicyRelationshipToOne";
import { OrgGroupRelationshipToOne } from "./OrgGroupRelationshipToOne";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships for creating a policy override.
 */
export class OrgGroupPolicyOverrideCreateRelationships {
  /**
   * Relationship to a single org group.
   */
  "orgGroup": OrgGroupRelationshipToOne;
  /**
   * Relationship to a single org group policy.
   */
  "orgGroupPolicy": OrgGroupPolicyRelationshipToOne;

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
    orgGroup: {
      baseName: "org_group",
      type: "OrgGroupRelationshipToOne",
      required: true,
    },
    orgGroupPolicy: {
      baseName: "org_group_policy",
      type: "OrgGroupPolicyRelationshipToOne",
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
    return OrgGroupPolicyOverrideCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
