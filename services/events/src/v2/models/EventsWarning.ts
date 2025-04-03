import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A warning message indicating something is wrong with the query.
 */
export class EventsWarning {
  /**
   * A unique code for this type of warning.
   */
  "code"?: string;
  /**
   * A detailed explanation of this specific warning.
   */
  "detail"?: string;
  /**
   * A short human-readable summary of the warning.
   */
  "title"?: string;
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
    code: {
      baseName: "code",
      type: "string",
    },
    detail: {
      baseName: "detail",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsWarning.attributeTypeMap;
  }

  public constructor() {}
}
