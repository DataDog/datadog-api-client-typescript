import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowBusinessServiceData } from "./ServiceNowBusinessServiceData";

/**
 * Response containing ServiceNow business services
 */
export class ServiceNowBusinessServicesResponse {
  /**
   * Array of ServiceNow business service data objects
   */
  "data": Array<ServiceNowBusinessServiceData>;
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
      type: "Array<ServiceNowBusinessServiceData>",
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
    return ServiceNowBusinessServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
