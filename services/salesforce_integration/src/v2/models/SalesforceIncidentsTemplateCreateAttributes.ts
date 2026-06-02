import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SalesforceIncidentsTemplatePriority } from "./SalesforceIncidentsTemplatePriority";

/**
 * Salesforce incident template attributes for a create request.
 */
export class SalesforceIncidentsTemplateCreateAttributes {
  /**
   * Long-form description body for Salesforce incidents created from this template.
   */
  "description": string;
  /**
   * Human-readable name for this incident template. Must be unique within your organization.
   */
  "name": string;
  /**
   * The Salesforce user ID that owns incidents created from this template.
   */
  "ownerId": string;
  /**
   * Priority of the Salesforce incident created from this template.
   */
  "priority": SalesforceIncidentsTemplatePriority;
  /**
   * The Datadog-assigned ID of the Salesforce organization this template belongs to.
   */
  "salesforceOrgId": string;
  /**
   * Subject line for Salesforce incidents created from this template.
   */
  "subject": string;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ownerId: {
      baseName: "owner_id",
      type: "string",
      required: true,
    },
    priority: {
      baseName: "priority",
      type: "SalesforceIncidentsTemplatePriority",
      required: true,
    },
    salesforceOrgId: {
      baseName: "salesforce_org_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    subject: {
      baseName: "subject",
      type: "string",
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
    return SalesforceIncidentsTemplateCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
