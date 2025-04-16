/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItemsType } from "./EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a single escalation target within a step for an escalation policy creation request. Contains `id` and `type`.
 */
export class EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItems {
  /**
   * Specifies the unique identifier for this target.
   */
  "id"?: string;
  /**
   * Specifies the type of escalation target (example `users`, `schedules`, or `teams`).
   */
  "type"?: EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItemsType;

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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItemsType",
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
    return EscalationPolicyCreateRequestDataAttributesStepsItemsTargetsItems.attributeTypeMap;
  }

  public constructor() {}
}
