import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a policy override.
 */
export class OrgGroupPolicyOverrideCreateAttributes {
  /**
   * The site of the organization.
   */
  "orgSite": string;
  /**
   * The UUID of the organization to grant the override.
   */
  "orgUuid": string;
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
    orgSite: {
      baseName: "org_site",
      type: "string",
      required: true,
    },
    orgUuid: {
      baseName: "org_uuid",
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
    return OrgGroupPolicyOverrideCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
