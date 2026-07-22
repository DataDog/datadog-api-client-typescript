import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomerOrgDisableResponseAttributes } from "./CustomerOrgDisableResponseAttributes";
import { CustomerOrgDisableResponseType } from "./CustomerOrgDisableResponseType";

/**
 * Data object returned after disabling the customer organization.
 */
export class CustomerOrgDisableResponseData {
  /**
   * Attributes describing the outcome of the disable action on the customer organization.
   */
  "attributes": CustomerOrgDisableResponseAttributes;
  /**
   * Identifier of the disabled organization.
   */
  "id": string;
  /**
   * JSON:API resource type for a customer org disable response.
   */
  "type": CustomerOrgDisableResponseType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "CustomerOrgDisableResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomerOrgDisableResponseType",
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
    return CustomerOrgDisableResponseData.attributeTypeMap;
  }

  public constructor() {}
}
