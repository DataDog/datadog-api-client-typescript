/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardScfwOutcome } from "./AIGuardScfwOutcome";
import { AIGuardScfwPackageFinding } from "./AIGuardScfwPackageFinding";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
export class AIGuardScfwFindings {
  /**
   * The packages the firewall evaluated, `ALLOW` ones included.
   */
  "packages"?: Array<AIGuardScfwPackageFinding>;
  /**
   * The Supply Chain Firewall outcome for a package, a matched rule, or the whole request.
   */
  "recommendedAction": AIGuardScfwOutcome;

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
    packages: {
      baseName: "packages",
      type: "Array<AIGuardScfwPackageFinding>",
    },
    recommendedAction: {
      baseName: "recommended_action",
      type: "AIGuardScfwOutcome",
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
    return AIGuardScfwFindings.attributeTypeMap;
  }

  public constructor() {}
}
