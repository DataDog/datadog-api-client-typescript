import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Data object for an LLM Observability experiment run.
 */
export class LLMObsExperimentRunDataResponse {
  /**
   * Aggregated metric data for this run.
   */
  "aggregateData"?: { [key: string]: any };
  /**
   * Timestamp when the run was created.
   */
  "createdAt"?: Date;
  /**
   * Identifier of the experiment this run belongs to.
   */
  "experimentId"?: string;
  /**
   * Unique identifier of the experiment run.
   */
  "id"?: string;
  /**
   * Sequential number of this run within the experiment.
   */
  "runNumber"?: number;
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
    aggregateData: {
      baseName: "aggregate_data",
      type: "{ [key: string]: any; }",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    experimentId: {
      baseName: "experiment_id",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    runNumber: {
      baseName: "run_number",
      type: "number",
      format: "int32",
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
    return LLMObsExperimentRunDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
