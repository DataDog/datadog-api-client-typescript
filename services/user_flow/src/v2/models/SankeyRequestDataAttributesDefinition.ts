import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class SankeyRequestDataAttributesDefinition {
  "entriesPerStep"?: number;
  "numberOfSteps"?: number;
  "source"?: string;
  "target"?: string;
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
    entriesPerStep: {
      baseName: "entries_per_step",
      type: "number",
      format: "int64",
    },
    numberOfSteps: {
      baseName: "number_of_steps",
      type: "number",
      format: "int64",
    },
    source: {
      baseName: "source",
      type: "string",
    },
    target: {
      baseName: "target",
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
    return SankeyRequestDataAttributesDefinition.attributeTypeMap;
  }

  public constructor() {}
}
