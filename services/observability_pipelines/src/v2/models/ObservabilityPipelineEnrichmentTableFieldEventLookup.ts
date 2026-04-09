import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Looks up a value from a field path in the log event.
 */
export class ObservabilityPipelineEnrichmentTableFieldEventLookup {
  /**
   * The path to the field in the log event to use as the lookup key.
   */
  "event": string;
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
    event: {
      baseName: "event",
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
    return ObservabilityPipelineEnrichmentTableFieldEventLookup.attributeTypeMap;
  }

  public constructor() {}
}
