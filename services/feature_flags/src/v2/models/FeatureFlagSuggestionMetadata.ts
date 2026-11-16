import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagSuggestionExperimentAction } from "./FeatureFlagSuggestionExperimentAction";

/**
 * Metadata associated with a suggestion. Fields other than `variant_id` are set by the server.
 */
export class FeatureFlagSuggestionMetadata {
  /**
   * Whether the server allows this allocation suggestion to reorder persisted drafts.
   */
  "allowDraftReorder"?: boolean;
  /**
   * Server-generated reference to an experiment action requiring approval.
   */
  "experimentAction"?: FeatureFlagSuggestionExperimentAction;
  /**
   * Server-generated fingerprint of the experiment action request.
   */
  "experimentActionRequestFingerprint"?: string;
  /**
   * The ID of the variant targeted by the suggestion.
   */
  "variantId"?: string;
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
    allowDraftReorder: {
      baseName: "allow_draft_reorder",
      type: "boolean",
    },
    experimentAction: {
      baseName: "experiment_action",
      type: "FeatureFlagSuggestionExperimentAction",
    },
    experimentActionRequestFingerprint: {
      baseName: "experiment_action_request_fingerprint",
      type: "string",
    },
    variantId: {
      baseName: "variant_id",
      type: "string",
      format: "uuid",
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
    return FeatureFlagSuggestionMetadata.attributeTypeMap;
  }

  public constructor() {}
}
