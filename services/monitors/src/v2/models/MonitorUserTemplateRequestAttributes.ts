import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorUserTemplateTemplateVariablesItems } from "./MonitorUserTemplateTemplateVariablesItems";

/**
 * Attributes for a monitor user template.
 */
export class MonitorUserTemplateRequestAttributes {
  /**
   * A brief description of the monitor user template.
   */
  "description"?: string;
  /**
   * A valid monitor definition in the same format as the [V1 Monitor API](https://docs.datadoghq.com/api/latest/monitors/#create-a-monitor).
   */
  "monitorDefinition": { [key: string]: any };
  /**
   * The definition of `MonitorUserTemplateTags` object.
   */
  "tags": Array<string>;
  /**
   * The definition of `MonitorUserTemplateTemplateVariables` object.
   */
  "templateVariables"?: Array<MonitorUserTemplateTemplateVariablesItems>;
  /**
   * The title of the monitor user template.
   */
  "title": string;
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
    },
    monitorDefinition: {
      baseName: "monitor_definition",
      type: "{ [key: string]: any; }",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    templateVariables: {
      baseName: "template_variables",
      type: "Array<MonitorUserTemplateTemplateVariablesItems>",
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorUserTemplateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
