import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowBusinessServiceAttributes } from "./ServiceNowBusinessServiceAttributes";
import { ServiceNowBusinessServiceType } from "./ServiceNowBusinessServiceType";

/**
 * Data object for a ServiceNow business service
 */
export class ServiceNowBusinessServiceData {
  /**
   * Attributes of a ServiceNow business service
   */
  "attributes": ServiceNowBusinessServiceAttributes;
  /**
   * Unique identifier for the ServiceNow business service
   */
  "id": string;
  /**
   * Type identifier for ServiceNow business service resources
   */
  "type": ServiceNowBusinessServiceType;
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
      type: "ServiceNowBusinessServiceAttributes",
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
      type: "ServiceNowBusinessServiceType",
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
    return ServiceNowBusinessServiceData.attributeTypeMap;
  }

  public constructor() {}
}
