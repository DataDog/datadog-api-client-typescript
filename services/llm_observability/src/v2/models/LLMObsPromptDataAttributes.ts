import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptDataset } from "./LLMObsPromptDataset";
import { LLMObsPromptResponseSource } from "./LLMObsPromptResponseSource";

/**
 * Attributes of an LLM Observability prompt registry entry.
 */
export class LLMObsPromptDataAttributes {
  /**
   * UUID of the user who authored the prompt.
   */
  "author"?: string;
  /**
   * Timestamp when the prompt was created.
   */
  "createdAt"?: Date;
  /**
   * Source that created the prompt, such as `ui-registry`, `sdk-registry`, or `sdk-instrumentation`.
   */
  "createdFrom": string;
  /**
   * Datasets observed in runs associated with this prompt.
   */
  "datasets"?: Array<LLMObsPromptDataset>;
  /**
   * Description of the prompt.
   */
  "description"?: string;
  /**
   * Source prompt from which this prompt was extracted, when applicable.
   */
  "extractedFrom"?: string;
  /**
   * Whether the prompt is a registry entry (as opposed to a code-discovered prompt).
   */
  "inRegistry": boolean;
  /**
   * Timestamp of the most recent observed run of this prompt.
   */
  "lastSeenAt"?: Date;
  /**
   * Timestamp when the most recent version of the prompt was created.
   */
  "lastVersionCreatedAt"?: Date;
  /**
   * The ML application this prompt is associated with.
   */
  "mlApp"?: string;
  /**
   * ML applications observed running this prompt.
   */
  "mlApps"?: Array<string>;
  /**
   * Number of versions of the prompt.
   */
  "numVersions": number;
  /**
   * Customer-provided identifier of the prompt.
   */
  "promptId": string;
  /**
   * Whether the prompt was created from the registry or discovered from observed LLM calls.
   */
  "source": LLMObsPromptResponseSource;
  /**
   * Tags observed on runs of this prompt.
   */
  "tags"?: Array<string>;
  /**
   * Title of the prompt.
   */
  "title"?: string;
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
    author: {
      baseName: "author",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdFrom: {
      baseName: "created_from",
      type: "string",
      required: true,
    },
    datasets: {
      baseName: "datasets",
      type: "Array<LLMObsPromptDataset>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    extractedFrom: {
      baseName: "extracted_from",
      type: "string",
    },
    inRegistry: {
      baseName: "in_registry",
      type: "boolean",
      required: true,
    },
    lastSeenAt: {
      baseName: "last_seen_at",
      type: "Date",
      format: "date-time",
    },
    lastVersionCreatedAt: {
      baseName: "last_version_created_at",
      type: "Date",
      format: "date-time",
    },
    mlApp: {
      baseName: "ml_app",
      type: "string",
    },
    mlApps: {
      baseName: "ml_apps",
      type: "Array<string>",
    },
    numVersions: {
      baseName: "num_versions",
      type: "number",
      required: true,
      format: "int64",
    },
    promptId: {
      baseName: "prompt_id",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "LLMObsPromptResponseSource",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    title: {
      baseName: "title",
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
    return LLMObsPromptDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
