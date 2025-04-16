/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItemsType } from "./EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a single relationship to a team within an escalation policy update request. Contains the team's `id` and `type`.
 */
export class EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems {
  /**
   * Specifies the unique identifier for the related team.
   */
  "id": string;
  /**
   * Indicates that the resource is of type `teams`.
   */
  "type": EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItemsType;

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
      required: true,
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItemsType",
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
    return EscalationPolicyUpdateRequestDataRelationshipsTeamsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
