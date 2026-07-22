import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Template variable metadata from a dashboard index.
 */
export class ReportScheduleIndexTemplateVariable {
  /**
   * Available values for the template variable.
   */
  "availableValues"?: Array<string>;
  /**
   * Default values for the template variable.
   */
  "defaults"?: Array<string>;
  /**
   * The template variable name.
   */
  "name"?: string;
  /**
   * The tag prefix for the template variable, when available.
   */
  "prefix"?: string;
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
    },
    prefix: {
      baseName: "prefix",
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
    return ReportScheduleIndexTemplateVariable.attributeTypeMap;
  }

  public constructor() {}
}
