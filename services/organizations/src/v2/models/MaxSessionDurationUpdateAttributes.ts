import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Attributes for the maximum session duration update request.
 */
export class MaxSessionDurationUpdateAttributes {
  /**
   * The maximum session duration, in seconds.
   */
  "maxSessionDuration": number;
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
    maxSessionDuration: {
      baseName: "max_session_duration",
      type: "number",
      required: true,
      format: "int64",
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
    return MaxSessionDurationUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
