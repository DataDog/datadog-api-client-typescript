import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowTemplateType } from "./ServiceNowTemplateType";
import { ServiceNowTemplateUpdateRequestAttributes } from "./ServiceNowTemplateUpdateRequestAttributes";

/**
 * Data object for updating a ServiceNow template
 */
export class ServiceNowTemplateUpdateRequestData {
  /**
   * Attributes for updating a ServiceNow template
   */
  "attributes": ServiceNowTemplateUpdateRequestAttributes;
  /**
   * Type identifier for ServiceNow template resources
   */
  "type": ServiceNowTemplateType;
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
      type: "ServiceNowTemplateUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ServiceNowTemplateType",
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
    return ServiceNowTemplateUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
