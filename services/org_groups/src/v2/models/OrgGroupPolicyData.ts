import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyAttributes } from "./OrgGroupPolicyAttributes";
import { OrgGroupPolicyRelationships } from "./OrgGroupPolicyRelationships";
import { OrgGroupPolicyType } from "./OrgGroupPolicyType";

/**
 * An org group policy resource.
 */
export class OrgGroupPolicyData {
  /**
   * Attributes of an org group policy.
   */
  "attributes": OrgGroupPolicyAttributes;
  /**
   * The ID of the org group policy.
   */
  "id": string;
  /**
   * Relationships of an org group policy.
   */
  "relationships"?: OrgGroupPolicyRelationships;
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
      type: "OrgGroupPolicyAttributes",
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
      type: "OrgGroupPolicyRelationships",
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
    return OrgGroupPolicyData.attributeTypeMap;
  }

  public constructor() {}
}
