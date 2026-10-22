/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPoliciesResponseMeta } from "./EscalationPoliciesResponseMeta";
import { EscalationPolicyIncluded } from "./EscalationPolicyIncluded";
import { EscalationPolicyListItem } from "./EscalationPolicyListItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A paginated list of escalation policies, with any related resources requested through `include`.
 */
export class EscalationPolicies {
  /**
   * A list of escalation policies.
   */
  "data": Array<EscalationPolicyListItem>;
  /**
   * Provides any included related resources, such as teams, steps, or targets, returned with the policies.
   */
  "included"?: Array<EscalationPolicyIncluded>;
  /**
   * Metadata included in the response when listing escalation policies.
   */
  "meta"?: EscalationPoliciesResponseMeta;

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
      type: "Array<EscalationPolicyListItem>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<EscalationPolicyIncluded>",
    },
    meta: {
      baseName: "meta",
      type: "EscalationPoliciesResponseMeta",
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
    return EscalationPolicies.attributeTypeMap;
  }

  public constructor() {}
}
