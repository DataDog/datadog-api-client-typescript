import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * List of objects representing template variables on the monitor which can have selectable values.
 */
export class MonitorUserTemplateTemplateVariablesItems {
  /**
   * Available values for the variable.
   */
  "availableValues"?: Array<string>;
  /**
   * Default values of the template variable.
   */
  "defaults"?: Array<string>;
  /**
   * The name of the template variable.
   */
  "name": string;
  /**
   * The tag key associated with the variable. This works the same as dashboard template variables.
   */
  "tagKey"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    availableValues: {
      baseName: "available_values",
      type: "Array<string>",
    },
    defaults: {
      baseName: "defaults",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tagKey: {
      baseName: "tag_key",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorUserTemplateTemplateVariablesItems.attributeTypeMap;
  }

  public constructor() {}
}
