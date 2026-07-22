import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * A Datadog metric name and whether it is filtered.
 */
export class AWSMetricNameFilterPreviewDDName {
  /**
   * Whether this Datadog metric name is filtered out.
   */
  "filtered": boolean;
  /**
   * The Datadog metric name.
   */
  "name": string;
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
    filtered: {
      baseName: "filtered",
      type: "boolean",
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
    return AWSMetricNameFilterPreviewDDName.attributeTypeMap;
  }

  public constructor() {}
}
