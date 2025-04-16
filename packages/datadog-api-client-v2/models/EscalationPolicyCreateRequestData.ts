/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyCreateRequestDataAttributes } from "./EscalationPolicyCreateRequestDataAttributes";
import { EscalationPolicyCreateRequestDataRelationships } from "./EscalationPolicyCreateRequestDataRelationships";
import { EscalationPolicyCreateRequestDataType } from "./EscalationPolicyCreateRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents the data for creating an escalation policy, including its attributes, relationships, and resource type.
 */
export class EscalationPolicyCreateRequestData {
  /**
   * Defines the attributes for creating an escalation policy, including its description, name, resolution behavior, retries, and steps.
   */
  "attributes": EscalationPolicyCreateRequestDataAttributes;
  /**
   * Represents relationships in an escalation policy creation request, including references to teams.
   */
  "relationships"?: EscalationPolicyCreateRequestDataRelationships;
  /**
   * Indicates that the resource is of type `policies`.
   */
  "type": EscalationPolicyCreateRequestDataType;

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
    attributes: {
      baseName: "attributes",
      type: "EscalationPolicyCreateRequestDataAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "EscalationPolicyCreateRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyCreateRequestDataType",
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
    return EscalationPolicyCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
