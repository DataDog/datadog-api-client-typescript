import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SalesforceIncidentsTemplateResponseData } from "./SalesforceIncidentsTemplateResponseData";

/**
 * Response containing a list of Salesforce incident templates.
 */
export class SalesforceIncidentsTemplatesResponse {
  /**
   * An array of Salesforce incident templates.
   */
  "data": Array<SalesforceIncidentsTemplateResponseData>;
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
      type: "Array<SalesforceIncidentsTemplateResponseData>",
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
    return SalesforceIncidentsTemplatesResponse.attributeTypeMap;
  }

  public constructor() {}
}
