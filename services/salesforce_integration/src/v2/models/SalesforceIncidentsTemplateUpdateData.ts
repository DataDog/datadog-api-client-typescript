import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SalesforceIncidentsTemplateType } from "./SalesforceIncidentsTemplateType";
import { SalesforceIncidentsTemplateUpdateAttributes } from "./SalesforceIncidentsTemplateUpdateAttributes";

/**
 * Salesforce incident template data for an update request.
 */
export class SalesforceIncidentsTemplateUpdateData {
  /**
   * Salesforce incident template attributes for an update request.
   */
  "attributes": SalesforceIncidentsTemplateUpdateAttributes;
  /**
   * The ID of the Salesforce incident template being updated. Must match the path parameter.
   */
  "id": string;
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
      type: "SalesforceIncidentsTemplateUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return SalesforceIncidentsTemplateUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
