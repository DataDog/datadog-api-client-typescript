import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SalesforceIncidentsTemplateCreateAttributes } from "./SalesforceIncidentsTemplateCreateAttributes";
import { SalesforceIncidentsTemplateType } from "./SalesforceIncidentsTemplateType";

/**
 * Salesforce incident template data for a create request.
 */
export class SalesforceIncidentsTemplateCreateData {
  /**
   * Salesforce incident template attributes for a create request.
   */
  "attributes": SalesforceIncidentsTemplateCreateAttributes;
  /**
   * Salesforce incident template resource type.
   */
  "type": SalesforceIncidentsTemplateType;
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
      type: "SalesforceIncidentsTemplateCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SalesforceIncidentsTemplateType",
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
    return SalesforceIncidentsTemplateCreateData.attributeTypeMap;
  }

  public constructor() {}
}
