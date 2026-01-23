import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowTemplateData } from "./ServiceNowTemplateData";

/**
 * Response containing ServiceNow templates
 */
export class ServiceNowTemplatesResponse {
  /**
   * Array of ServiceNow template data objects
   */
  "data": Array<ServiceNowTemplateData>;
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
      type: "Array<ServiceNowTemplateData>",
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
    return ServiceNowTemplatesResponse.attributeTypeMap;
  }

  public constructor() {}
}
