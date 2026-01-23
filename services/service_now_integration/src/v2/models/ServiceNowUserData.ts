import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowUserAttributes } from "./ServiceNowUserAttributes";
import { ServiceNowUserType } from "./ServiceNowUserType";

/**
 * Data object for a ServiceNow user
 */
export class ServiceNowUserData {
  /**
   * Attributes of a ServiceNow user
   */
  "attributes": ServiceNowUserAttributes;
  /**
   * Unique identifier for the ServiceNow user
   */
  "id": string;
  /**
   * Type identifier for ServiceNow user resources
   */
  "type": ServiceNowUserType;
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
      type: "ServiceNowUserAttributes",
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
      type: "ServiceNowUserType",
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
    return ServiceNowUserData.attributeTypeMap;
  }

  public constructor() {}
}
