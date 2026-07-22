import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Attributes of the report author.
 */
export class ReportScheduleAuthorAttributes {
  /**
   * The email address of the report author, or `null` if unavailable.
   */
  "email": string|null;
  /**
   * The display name of the report author, or `null` if unavailable.
   */
  "name": string|null;
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
    email: {
      baseName: "email",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
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
    return ReportScheduleAuthorAttributes.attributeTypeMap;
  }

  public constructor() {}
}
