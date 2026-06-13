import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating or updating an LLM Observability patterns configuration.
 */
export class LLMObsPatternsConfigUpsertRequestAttributes {
  /**
   * Integration account ID for a bring-your-own-model configuration.
   */
  "accountId"?: string;
  /**
   * The ID of an existing configuration to update. If omitted, a new configuration is created.
   */
  "configId"?: string;
  /**
   * Query that selects the spans the patterns run analyzes.
   */
  "evpQuery": string;
  /**
   * Depth of the topic hierarchy to generate.
   */
  "hierarchyDepth": number;
  /**
   * Integration provider for a bring-your-own-model configuration.
   */
  "integrationProvider"?: string;
  /**
   * Model name for a bring-your-own-model configuration.
   */
  "modelName"?: string;
  /**
   * Name of the configuration.
   */
  "name": string;
  /**
   * Maximum number of records to process for the run.
   */
  "numRecords": number;
  /**
   * Fraction of matching spans to sample for the run.
   */
  "samplingRatio": number;
  /**
   * Scope of the configuration.
   */
  "scope"?: string;
  /**
   * Template used to guide topic generation.
   */
  "template"?: string;
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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    configId: {
      baseName: "config_id",
      type: "string",
    },
    evpQuery: {
      baseName: "evp_query",
      type: "string",
      required: true,
    },
    hierarchyDepth: {
      baseName: "hierarchy_depth",
      type: "number",
      required: true,
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    numRecords: {
      baseName: "num_records",
      type: "number",
      required: true,
      format: "int32",
    },
    samplingRatio: {
      baseName: "sampling_ratio",
      type: "number",
      required: true,
      format: "double",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    template: {
      baseName: "template",
      type: "string",
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
    return LLMObsPatternsConfigUpsertRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
