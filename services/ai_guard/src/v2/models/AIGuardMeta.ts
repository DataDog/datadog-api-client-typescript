import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIGuardConfidenceThresholdOverride } from "./AIGuardConfidenceThresholdOverride";
import { AIGuardToolPolicyAction } from "./AIGuardToolPolicyAction";

/**
 * Metadata about the evaluated conversation, used to select the policy and evaluator behavior.
 */
export class AIGuardMeta {
  /**
   * The coding agent that produced the conversation. By default, a non-empty
   * value selects the coding-agent evaluator profile, while an omitted or empty
   * value selects the default profile. Known identifiers include `claude-code`,
   * `codex`, `cursor`, and `github-copilot`; other identifiers are accepted.
   * The coding-agent profile assumes the caller can ask the user to confirm
   * Supply Chain Firewall warnings; the default profile assumes it cannot.
   */
  "codingAgent"?: string;
  /**
   * Request-only confidence threshold override. A number sets the threshold
   * for every threat category; an object supplies a global threshold and
   * optional per-category overrides. Omit this field to use the stored
   * sensitivity policy. This field is not returned in evaluation responses.
   */
  "confidenceThreshold"?: AIGuardConfidenceThresholdOverride;
  /**
   * The environment the conversation belongs to.
   */
  "env"?: string;
  /**
   * Whether to run the Sensitive Data Scanner for this request, overriding the stored policy.
   */
  "isSdsEnabledOverride"?: boolean;
  /**
   * The name of the service the conversation belongs to.
   */
  "service"?: string;
  /**
   * A non-empty map replaces stored tool policies for this request only,
   * keyed by tool name. Any called tool not present resolves to EVALUATE.
   * Only takes effect when tool policies are enabled for the organization.
   */
  "toolPolicies"?: { [key: string]: AIGuardToolPolicyAction };
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
    codingAgent: {
      baseName: "coding_agent",
      type: "string",
    },
    confidenceThreshold: {
      baseName: "confidence_threshold",
      type: "AIGuardConfidenceThresholdOverride",
    },
    env: {
      baseName: "env",
      type: "string",
    },
    isSdsEnabledOverride: {
      baseName: "is_sds_enabled_override",
      type: "boolean",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    toolPolicies: {
      baseName: "tool_policies",
      type: "{ [key: string]: AIGuardToolPolicyAction; }",
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
    return AIGuardMeta.attributeTypeMap;
  }

  public constructor() {}
}
