import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Additional options for a span search request.
 */
export class LLMObsSpanSearchOptions {
  /**
   * Whether to include attachment data in the response. Defaults to `true`.
   */
  "includeAttachments"?: boolean;
  /**
   * Offset in seconds applied to both `from` and `to` timestamps.
   */
  "timeOffset"?: number;
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
    includeAttachments: {
      baseName: "include_attachments",
      type: "boolean",
    },
    timeOffset: {
      baseName: "time_offset",
      type: "number",
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
    return LLMObsSpanSearchOptions.attributeTypeMap;
  }

  public constructor() {}
}
