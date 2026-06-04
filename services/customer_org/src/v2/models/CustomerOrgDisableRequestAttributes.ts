import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Optional attributes for a customer org disable request. When supplied, `org_uuid`
 * must match the authenticated organization or the request is rejected.
 */
export class CustomerOrgDisableRequestAttributes {
  /**
   * Datadog organization UUID. If supplied, must match the authenticated
   * organization.
   */
  "orgUuid"?: string;
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
    orgUuid: {
      baseName: "org_uuid",
      type: "string",
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
    return CustomerOrgDisableRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
