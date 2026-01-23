import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowInstanceData } from "./ServiceNowInstanceData";

/**
 * Response containing ServiceNow instances
 */
export class ServiceNowInstancesResponse {
  /**
   * Array of ServiceNow instance data objects
   */
  "data": Array<ServiceNowInstanceData>;
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
      type: "Array<ServiceNowInstanceData>",
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
    return ServiceNowInstancesResponse.attributeTypeMap;
  }

  public constructor() {}
}
