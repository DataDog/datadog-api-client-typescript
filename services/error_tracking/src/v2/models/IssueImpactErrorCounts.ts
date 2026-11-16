import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Number of errors reported by each source. Several sources can report the same error, such as an APM span and
 * a log, so the counts overlap: don't add them together.
 */
export class IssueImpactErrorCounts {
  /**
   * Number of errors reported by APM.
   */
  "apm": number;
  /**
   * Number of errors reported by Agent Observability.
   */
  "llmobs": number;
  /**
   * Number of errors reported by Log Management.
   */
  "logs": number;
  /**
   * Number of errors reported by RUM.
   */
  "rum": number;
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
    apm: {
      baseName: "apm",
      type: "number",
      required: true,
      format: "int64",
    },
    llmobs: {
      baseName: "llmobs",
      type: "number",
      required: true,
      format: "int64",
    },
    logs: {
      baseName: "logs",
      type: "number",
      required: true,
      format: "int64",
    },
    rum: {
      baseName: "rum",
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
    return IssueImpactErrorCounts.attributeTypeMap;
  }

  public constructor() {}
}
