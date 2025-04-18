/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyUpdateRequestDataAttributesStepsItemsAssignment } from "./EscalationPolicyUpdateRequestDataAttributesStepsItemsAssignment";
import { EscalationPolicyUpdateRequestDataAttributesStepsItemsTargetsItems } from "./EscalationPolicyUpdateRequestDataAttributesStepsItemsTargetsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a single escalation step within an escalation policy update request. Contains assignment strategy, escalation timeout, an optional step ID, and a list of targets.
 */
export class EscalationPolicyUpdateRequestDataAttributesStepsItems {
  /**
   * Specifies how this escalation step will assign targets (example `default`).
   */
  "assignment"?: EscalationPolicyUpdateRequestDataAttributesStepsItemsAssignment;
  /**
   * Defines how many seconds to wait before escalating to the next step.
   */
  "escalateAfterSeconds"?: number;
  /**
   * Specifies the unique identifier of this step.
   */
  "id"?: string;
  /**
   * Specifies the collection of escalation targets for this step.
   */
  "targets": Array<EscalationPolicyUpdateRequestDataAttributesStepsItemsTargetsItems>;

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
    assignment: {
      baseName: "assignment",
      type: "EscalationPolicyUpdateRequestDataAttributesStepsItemsAssignment",
    },
    escalateAfterSeconds: {
      baseName: "escalate_after_seconds",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    targets: {
      baseName: "targets",
      type: "Array<EscalationPolicyUpdateRequestDataAttributesStepsItemsTargetsItems>",
      required: true,
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
    return EscalationPolicyUpdateRequestDataAttributesStepsItems.attributeTypeMap;
  }

  public constructor() {}
}
