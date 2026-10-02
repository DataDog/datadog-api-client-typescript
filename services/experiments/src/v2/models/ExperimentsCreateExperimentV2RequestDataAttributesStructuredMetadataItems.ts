import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata field key and values to set on the experiment.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems {
  /**
   * Selected values for an enumerated metadata field.
   */
  "enumValues"?: Array<string>;
  /**
   * Key that identifies the metadata field.
   */
  "fieldKey": string;
  /**
   * Text value for a free-text metadata field.
   */
  "freetextValue"?: string;
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
    enumValues: {
      baseName: "enum_values",
      type: "Array<string>",
    },
    fieldKey: {
      baseName: "field_key",
      type: "string",
      required: true,
    },
    freetextValue: {
      baseName: "freetext_value",
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
    return ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems.attributeTypeMap;
  }

  public constructor() {}
}
