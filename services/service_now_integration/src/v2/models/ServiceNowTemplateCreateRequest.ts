import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowTemplateCreateRequestData } from "./ServiceNowTemplateCreateRequestData";

/**
 * Request to create a ServiceNow template
 */
export class ServiceNowTemplateCreateRequest {
  /**
   * Data object for creating a ServiceNow template
   */
  "data": ServiceNowTemplateCreateRequestData;
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
      type: "ServiceNowTemplateCreateRequestData",
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
    return ServiceNowTemplateCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
