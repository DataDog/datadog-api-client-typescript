import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Trigger a workflow from a Form.
 */
export class FormTrigger {
  /**
   * The form UUID.
   */
  "formId"?: string;
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
    formId: {
      baseName: "formId",
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
    return FormTrigger.attributeTypeMap;
  }

  public constructor() {}
}
