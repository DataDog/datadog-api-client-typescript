/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPolicyOverrideType } from "./OrgGroupPolicyOverrideType";
import { OrgGroupPolicyOverrideUpdateAttributes } from "./OrgGroupPolicyOverrideUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating a policy override.
 */
export class OrgGroupPolicyOverrideUpdateData {
  /**
   * Attributes for updating a policy override.
   */
  "attributes": OrgGroupPolicyOverrideUpdateAttributes;
  /**
   * The ID of the policy override.
   */
  "id": string;
  /**
   * Org group policy overrides resource type.
   */
  "type": OrgGroupPolicyOverrideType;

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
      type: "OrgGroupPolicyOverrideUpdateAttributes",
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
      type: "OrgGroupPolicyOverrideType",
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
    return OrgGroupPolicyOverrideUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
