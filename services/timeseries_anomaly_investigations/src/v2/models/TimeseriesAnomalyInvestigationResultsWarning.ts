import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Non-fatal warning produced while executing the investigation.
 */
export class TimeseriesAnomalyInvestigationResultsWarning {
  /**
   * Human-readable warning message.
   */
  "message": string;
  /**
   * Machine-readable warning name.
   */
  "name": string;
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
    message: {
      baseName: "message",
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
    return TimeseriesAnomalyInvestigationResultsWarning.attributeTypeMap;
  }

  public constructor() {}
}
