import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyOverrideAttributes } from "./OrgGroupPolicyOverrideAttributes";
import { OrgGroupPolicyOverrideRelationships } from "./OrgGroupPolicyOverrideRelationships";
import { OrgGroupPolicyOverrideType } from "./OrgGroupPolicyOverrideType";

/**
 * An org group policy override resource.
 */
export class OrgGroupPolicyOverrideData {
  /**
   * Attributes of an org group policy override.
   */
  "attributes": OrgGroupPolicyOverrideAttributes;
  /**
   * The ID of the policy override.
   */
  "id": string;
  /**
   * Relationships of an org group policy override.
   */
  "relationships"?: OrgGroupPolicyOverrideRelationships;
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
      type: "OrgGroupPolicyOverrideAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupPolicyOverrideRelationships",
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
    return OrgGroupPolicyOverrideData.attributeTypeMap;
  }

  public constructor() {}
}
