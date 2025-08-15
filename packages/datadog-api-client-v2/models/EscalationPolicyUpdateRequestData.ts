/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyUpdateRequestDataAttributes } from "./EscalationPolicyUpdateRequestDataAttributes";
import { EscalationPolicyUpdateRequestDataRelationships } from "./EscalationPolicyUpdateRequestDataRelationships";
import { EscalationPolicyUpdateRequestDataType } from "./EscalationPolicyUpdateRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents the data for updating an existing escalation policy, including its ID, attributes, relationships, and resource type.
 */
export class EscalationPolicyUpdateRequestData {
  /**
   * Defines the attributes that can be updated for an escalation policy, such as description, name, resolution behavior, retries, and steps.
   */
  "attributes": EscalationPolicyUpdateRequestDataAttributes;
  /**
   * Specifies the unique identifier of the escalation policy being updated.
   */
  "id": string;
  /**
   * Represents relationships in an escalation policy update request, including references to teams.
   */
  "relationships"?: EscalationPolicyUpdateRequestDataRelationships;
  /**
   * Indicates that the resource is of type `policies`.
   */
  "type": EscalationPolicyUpdateRequestDataType;

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
      type: "EscalationPolicyUpdateRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "EscalationPolicyUpdateRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyUpdateRequestDataType",
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
    return EscalationPolicyUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
