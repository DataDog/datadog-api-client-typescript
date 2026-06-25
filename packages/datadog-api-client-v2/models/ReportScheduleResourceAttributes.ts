/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleIndexTemplateVariable } from "./ReportScheduleIndexTemplateVariable";
import { ReportScheduleResourceType } from "./ReportScheduleResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  "additionalProperties"?: { [key: string]: any };

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
