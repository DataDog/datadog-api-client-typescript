import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleIndexTemplateVariable } from "./ReportScheduleIndexTemplateVariable";
import { ReportScheduleResourceType } from "./ReportScheduleResourceType";

/**
 * Attributes of an included report target resource.
 */
export class ReportScheduleResourceAttributes {
  /**
   * The type of dashboard resource the report schedule targets.
   */
  "resourceType": ReportScheduleResourceType;
  /**
   * Template variable metadata from the dashboard resource, when available.
   */
  "templateVariables"?: Array<ReportScheduleIndexTemplateVariable>;
  /**
   * The title of the dashboard or integration dashboard resource, when available.
   */
  "title"?: string;
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
    resourceType: {
      baseName: "resource_type",
      type: "ReportScheduleResourceType",
      required: true,
    },
    templateVariables: {
      baseName: "template_variables",
      type: "Array<ReportScheduleIndexTemplateVariable>",
    },
    title: {
      baseName: "title",
      type: "string",
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
    return ReportScheduleResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
