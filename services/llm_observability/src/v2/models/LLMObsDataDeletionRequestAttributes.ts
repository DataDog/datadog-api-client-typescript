import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for an LLM Observability data deletion request.
 */
export class LLMObsDataDeletionRequestAttributes {
  /**
   * Optional delay in seconds before the deletion is executed.
   */
  "delay"?: number;
  /**
   * Start of the deletion time range in milliseconds since Unix epoch.
   */
  "from": number;
  /**
   * Query filters selecting the data to delete. Must include a `query` key with an `@trace_id` filter.
   */
  "query": { [key: string]: string };
  /**
   * End of the deletion time range in milliseconds since Unix epoch.
   */
  "to": number;
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
    delay: {
      baseName: "delay",
      type: "number",
      format: "int64",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "{ [key: string]: string; }",
      required: true,
    },
    to: {
      baseName: "to",
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
    return LLMObsDataDeletionRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
