import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowTemplateUpdateRequestData } from "./ServiceNowTemplateUpdateRequestData";

/**
 * Request to update a ServiceNow template
 */
export class ServiceNowTemplateUpdateRequest {
  /**
   * Data object for updating a ServiceNow template
   */
  "data": ServiceNowTemplateUpdateRequestData;
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
      type: "ServiceNowTemplateUpdateRequestData",
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
    return ServiceNowTemplateUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
