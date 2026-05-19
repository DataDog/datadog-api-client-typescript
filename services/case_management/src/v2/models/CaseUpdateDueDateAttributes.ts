import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for setting or clearing a case's due date.
 */
export class CaseUpdateDueDateAttributes {
  /**
   * The target resolution date for the case, in `YYYY-MM-DD` format. Set to `null` to clear the due date.
   */
  "dueDate": string;
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
    dueDate: {
      baseName: "due_date",
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
    return CaseUpdateDueDateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
