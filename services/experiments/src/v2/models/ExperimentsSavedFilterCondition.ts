import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A condition that uses a saved filter. Inline fields must be omitted or null.
 */
export class ExperimentsSavedFilterCondition {
  /**
   * Saved-filter UUID.
   */
  "savedFilterId": string;
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
    savedFilterId: {
      baseName: "saved_filter_id",
      type: "string",
      required: true,
      format: "uuid",
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
    return ExperimentsSavedFilterCondition.attributeTypeMap;
  }

  public constructor() {}
}
