import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SalesforceIncidentsOrganizationResponseData } from "./SalesforceIncidentsOrganizationResponseData";

/**
 * Response containing a list of Salesforce organizations connected to the
 * Datadog Salesforce integration.
 */
export class SalesforceIncidentsOrganizationsResponse {
  /**
   * An array of Salesforce organizations.
   */
  "data": Array<SalesforceIncidentsOrganizationResponseData>;
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
    data: {
      baseName: "data",
      type: "Array<SalesforceIncidentsOrganizationResponseData>",
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
    return SalesforceIncidentsOrganizationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
