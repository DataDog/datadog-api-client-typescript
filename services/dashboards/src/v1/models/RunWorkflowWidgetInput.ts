import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object to map a dashboard template variable to a workflow input.
 */
export class RunWorkflowWidgetInput {
  /**
   * Name of the workflow input.
   */
  "name": string;
  /**
   * Dashboard template variable. Can be suffixed with '.value' or '.key'.
   */
  "value": string;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
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
    return RunWorkflowWidgetInput.attributeTypeMap;
  }

  public constructor() {}
}
