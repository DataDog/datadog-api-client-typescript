import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SalesforceIncidentsTemplateCreateData } from "./SalesforceIncidentsTemplateCreateData";

/**
 * Create request for a Salesforce incident template.
 */
export class SalesforceIncidentsTemplateCreateRequest {
  /**
   * Salesforce incident template data for a create request.
   */
  "data": SalesforceIncidentsTemplateCreateData;
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
      type: "SalesforceIncidentsTemplateCreateData",
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
    return SalesforceIncidentsTemplateCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
