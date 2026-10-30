/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardAction } from "./AIGuardAction";
import { AIGuardRedactionReplacement } from "./AIGuardRedactionReplacement";
import { AIGuardScfwFindings } from "./AIGuardScfwFindings";
import { AIGuardSdsFinding } from "./AIGuardSdsFinding";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The evaluation result with the recommended action and detected threat information.
 */
export class AIGuardEvaluateAttributesResponse {
  /**
   * The recommended action for the evaluated conversation.
   */
  "action": AIGuardAction;
  /**
   * The global threat probability, between `0` and `1`. Included only when computed.
   */
  "globalProb"?: number;
  /**
   * Whether blocking is enabled for the organization.
   */
  "isBlockingEnabled": boolean;
  /**
   * The explanation for the recommended action, for logging rather than user-facing display.
   */
  "reason": string;
  /**
   * The redacted replacements computed for the request. Included only when redaction applies.
   */
  "redactionReplacements"?: Array<AIGuardRedactionReplacement>;
  /**
   * The Supply Chain Firewall verdict for the version-pinned install packages
   * found in the request. Evaluation requires Supply Chain Firewall to be enabled
   * for the organization and the caller to have the `appsec_vm_read` permission.
   * Without that permission, Supply Chain Firewall evaluation is skipped; the
   * AI Guard evaluation request itself is not rejected. Findings are omitted
   * when Supply Chain Firewall does not produce a result.
   * The recommended action combines the package outcomes.
   * Confirmation support is inferred from the evaluator profile, not from a
   * separate confirmation-capability flag. By default, a non-empty
   * `meta.coding_agent` selects the coding-agent profile, which assumes the caller
   * can ask for confirmation and retains WARN in `recommended_action`.
   * Omitting `meta.coding_agent` or setting it to an empty string selects the
   * default profile, which assumes the caller cannot ask for confirmation and
   * returns ALLOW instead of WARN in `recommended_action`. Package outcomes
   * still retain WARN, and BLOCK is never changed to ALLOW by this rule.
   */
  "scfwFindings"?: AIGuardScfwFindings;
  /**
   * The sensitive data findings from the Sensitive Data Scanner. Included only when findings exist.
   */
  "sdsFindings"?: Array<AIGuardSdsFinding>;
  /**
   * The detection confidence for each threat tag, between `0` and `1`. May be null when the evaluation does not produce per-category scores.
   */
  "tagProbs": { [key: string]: number } | null;
  /**
   * The threat tags detected in the conversation.
   */
  "tags": Array<string>;

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
    action: {
      baseName: "action",
      type: "AIGuardAction",
      required: true,
    },
    globalProb: {
      baseName: "global_prob",
      type: "number",
      format: "double",
    },
    isBlockingEnabled: {
      baseName: "is_blocking_enabled",
      type: "boolean",
      required: true,
    },
    reason: {
      baseName: "reason",
      type: "string",
      required: true,
    },
    redactionReplacements: {
      baseName: "redaction_replacements",
      type: "Array<AIGuardRedactionReplacement>",
    },
    scfwFindings: {
      baseName: "scfw_findings",
      type: "AIGuardScfwFindings",
    },
    sdsFindings: {
      baseName: "sds_findings",
      type: "Array<AIGuardSdsFinding>",
    },
    tagProbs: {
      baseName: "tag_probs",
      type: "{ [key: string]: number; }",
      required: true,
    },
    tags: {
      baseName: "tags",
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
    return AIGuardEvaluateAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
