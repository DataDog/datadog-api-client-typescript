import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing the ordered list of pipeline IDs.
 */
export class LogsPipelinesOrder {
  /**
   * Ordered Array of `<PIPELINE_ID>` strings, the order of pipeline IDs in the array
   * define the overall Pipelines order for Datadog.
   */
  "pipelineIds": Array<string>;
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
    pipelineIds: {
      baseName: "pipeline_ids",
      type: "Array<string>",
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
    return LogsPipelinesOrder.attributeTypeMap;
  }

  public constructor() {}
}
