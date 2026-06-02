import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SalesforceIncidentsTemplateUpdateData } from "./SalesforceIncidentsTemplateUpdateData";

/**
 * Update request for a Salesforce incident template.
 */
export class SalesforceIncidentsTemplateUpdateRequest {
  /**
   * Salesforce incident template data for an update request.
   */
  "data": SalesforceIncidentsTemplateUpdateData;
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
      type: "SalesforceIncidentsTemplateUpdateData",
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
    return SalesforceIncidentsTemplateUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
