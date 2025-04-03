import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Organization } from "./Organization";

/**
 * Response with an organization.
 */
export class OrganizationResponse {
  /**
   * Create, edit, and manage organizations.
   */
  "org"?: Organization;
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
    org: {
      baseName: "org",
      type: "Organization",
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
    return OrganizationResponse.attributeTypeMap;
  }

  public constructor() {}
}
