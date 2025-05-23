/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationTargets } from "./EscalationTargets";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents the relationship of an escalation policy step to its targets.
 */
export class EscalationPolicyStepRelationships {
  /**
   * A list of escalation targets for a step
   */
  "targets"?: EscalationTargets;

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
    targets: {
      baseName: "targets",
      type: "EscalationTargets",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EscalationPolicyStepRelationships.attributeTypeMap;
  }

  public constructor() {}
}
