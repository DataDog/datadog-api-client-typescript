import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Tag grouped under an influential tag by synonym analysis.
 */
export class TimeseriesAnomalyInvestigationFindingSynonym {
  /**
   * Synonymous tag key.
   */
  "key": string;
  /**
   * Values associated with the synonymous tag.
   */
  "values": Array<string>;
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
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    values: {
      baseName: "values",
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
    return TimeseriesAnomalyInvestigationFindingSynonym.attributeTypeMap;
  }

  public constructor() {}
}
