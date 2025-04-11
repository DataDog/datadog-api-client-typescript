import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Organization } from "./Organization";

/**
 * Response with the list of organizations.
 */
export class OrganizationListResponse {
  /**
   * Array of organization objects.
   */
  "orgs"?: Array<Organization>;
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
    orgs: {
      baseName: "orgs",
      type: "Array<Organization>",
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
    return OrganizationListResponse.attributeTypeMap;
  }

  public constructor() {}
}
