import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information about when experiment results were updated and whether they are stale.
 */
export class ExperimentsExperimentResultsV2MetaDTO {
  /**
   * Whether the saved results require a refresh or their freshness cannot be confirmed. See stale_reasons for
   * details.
   */
  "isStale"?: boolean;
  /**
   * Time when the experiment results were last updated.
   */
  "resultsLastUpdated"?: Date;
  /**
   * Reasons the saved experiment results are stale.
   */
  "staleReasons"?: Array<string>;
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
    isStale: {
      baseName: "is_stale",
      type: "boolean",
    },
    resultsLastUpdated: {
      baseName: "results_last_updated",
      type: "Date",
      format: "date-time",
    },
    staleReasons: {
      baseName: "stale_reasons",
      type: "Array<string>",
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
    return ExperimentsExperimentResultsV2MetaDTO.attributeTypeMap;
  }

  public constructor() {}
}
