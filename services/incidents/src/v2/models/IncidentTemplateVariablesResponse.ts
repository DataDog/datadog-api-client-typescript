import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTemplateVariableData } from "./IncidentTemplateVariableData";

/**
 * Response with a list of template variables.
 */
export class IncidentTemplateVariablesResponse {
  /**
   * List of template variables.
   */
  "data": Array<IncidentTemplateVariableData>;
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
    data: {
      baseName: "data",
      type: "Array<IncidentTemplateVariableData>",
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
    return IncidentTemplateVariablesResponse.attributeTypeMap;
  }

  public constructor() {}
}
