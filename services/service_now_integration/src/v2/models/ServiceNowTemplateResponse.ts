import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowTemplateData } from "./ServiceNowTemplateData";

/**
 * Response containing a single ServiceNow template
 */
export class ServiceNowTemplateResponse {
  /**
   * Data object for a ServiceNow template
   */
  "data": ServiceNowTemplateData;
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
      type: "ServiceNowTemplateData",
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
    return ServiceNowTemplateResponse.attributeTypeMap;
  }

  public constructor() {}
}
