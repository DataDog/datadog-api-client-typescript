import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines how to rename a field in log events.
 */
export class ObservabilityPipelineRenameFieldsProcessorField {
  /**
   * The field name to assign the renamed value to.
   */
  "destination": string;
  /**
   * Indicates whether the original field, that is received from the source, should be kept (`true`) or removed (`false`) after renaming.
   */
  "preserveSource": boolean;
  /**
   * The original field name in the log event that should be renamed.
   */
  "source": string;
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
    destination: {
      baseName: "destination",
      type: "string",
      required: true,
    },
    preserveSource: {
      baseName: "preserve_source",
      type: "boolean",
      required: true,
    },
    source: {
      baseName: "source",
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
    return ObservabilityPipelineRenameFieldsProcessorField.attributeTypeMap;
  }

  public constructor() {}
}
