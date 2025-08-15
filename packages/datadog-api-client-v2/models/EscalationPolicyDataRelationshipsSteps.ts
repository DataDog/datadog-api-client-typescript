/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyDataRelationshipsStepsDataItems } from "./EscalationPolicyDataRelationshipsStepsDataItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the relationship to a collection of steps within an escalation policy. Contains an array of step data references.
 */
export class EscalationPolicyDataRelationshipsSteps {
  /**
   * An array of references to the steps defined in this escalation policy.
   */
  "data"?: Array<EscalationPolicyDataRelationshipsStepsDataItems>;

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
    data: {
      baseName: "data",
      type: "Array<EscalationPolicyDataRelationshipsStepsDataItems>",
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
    return EscalationPolicyDataRelationshipsSteps.attributeTypeMap;
  }

  public constructor() {}
}
