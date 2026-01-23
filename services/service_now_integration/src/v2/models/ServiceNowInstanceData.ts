import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowInstanceAttributes } from "./ServiceNowInstanceAttributes";
import { ServiceNowInstanceType } from "./ServiceNowInstanceType";

/**
 * Data object for a ServiceNow instance
 */
export class ServiceNowInstanceData {
  /**
   * Attributes of a ServiceNow instance
   */
  "attributes": ServiceNowInstanceAttributes;
  /**
   * Unique identifier for the ServiceNow instance
   */
  "id": string;
  /**
   * Type identifier for ServiceNow instance resources
   */
  "type": ServiceNowInstanceType;
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
    attributes: {
      baseName: "attributes",
      type: "ServiceNowInstanceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ServiceNowInstanceType",
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
    return ServiceNowInstanceData.attributeTypeMap;
  }

  public constructor() {}
}
