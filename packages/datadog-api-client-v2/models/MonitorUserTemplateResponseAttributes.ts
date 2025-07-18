/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorUserTemplateTemplateVariablesItems } from "./MonitorUserTemplateTemplateVariablesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for a monitor user template.
 */
export class MonitorUserTemplateResponseAttributes {
  /**
   * The created timestamp of the template.
   */
  "created"?: Date;
  /**
   * A brief description of the monitor user template.
   */
  "description"?: string;
  /**
   * The last modified timestamp. When the template version was created.
   */
  "modified"?: Date;
  /**
   * A valid monitor definition in the same format as the [V1 Monitor API](https://docs.datadoghq.com/api/latest/monitors/#create-a-monitor).
   */
  "monitorDefinition"?: { [key: string]: any };
  /**
   * The definition of `MonitorUserTemplateTags` object.
   */
  "tags"?: Array<string>;
  /**
   * The definition of `MonitorUserTemplateTemplateVariables` object.
   */
  "templateVariables"?: Array<MonitorUserTemplateTemplateVariablesItems>;
  /**
   * The title of the monitor user template.
   */
  "title"?: string;
  /**
   * The version of the monitor user template.
   */
  "version"?: number;

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
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    monitorDefinition: {
      baseName: "monitor_definition",
      type: "{ [key: string]: any; }",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    templateVariables: {
      baseName: "template_variables",
      type: "Array<MonitorUserTemplateTemplateVariablesItems>",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorUserTemplateResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
