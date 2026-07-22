import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Snapshot of the configuration used for a patterns run.
 */
export class LLMObsPatternsConfigSnapshot {
  /**
   * Integration account ID used for a bring-your-own-model run.
   */
  "accountId"?: string;
  /**
   * Query that selected the spans for the run.
   */
  "evpQuery"?: string;
  /**
   * Depth of the topic hierarchy generated.
   */
  "hierarchyDepth"?: number;
  /**
   * Integration provider used for a bring-your-own-model run.
   */
  "integrationProvider"?: string;
  /**
   * Model name used for a bring-your-own-model run.
   */
  "modelName"?: string;
  /**
   * Maximum number of records processed for the run.
   */
  "numRecords"?: number;
  /**
   * Fraction of matching spans sampled for the run.
   */
  "samplingRatio"?: number;
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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    evpQuery: {
      baseName: "evp_query",
      type: "string",
    },
    hierarchyDepth: {
      baseName: "hierarchy_depth",
      type: "number",
      format: "int32",
    },
    integrationProvider: {
      baseName: "integration_provider",
      type: "string",
    },
    modelName: {
      baseName: "model_name",
      type: "string",
    },
    numRecords: {
      baseName: "num_records",
      type: "number",
      format: "int32",
    },
    samplingRatio: {
      baseName: "sampling_ratio",
      type: "number",
      format: "double",
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
    return LLMObsPatternsConfigSnapshot.attributeTypeMap;
  }

  public constructor() {}
}
