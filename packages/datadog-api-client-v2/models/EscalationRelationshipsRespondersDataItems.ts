/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationRelationshipsRespondersDataItemsType } from "./EscalationRelationshipsRespondersDataItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a user assigned to an escalation step.
 */
export class EscalationRelationshipsRespondersDataItems {
  /**
   * Unique identifier of the user assigned to the escalation step.
   */
  "id": string;
  /**
   * Represents the resource type for users assigned as responders in an escalation step.
   */
  "type": EscalationRelationshipsRespondersDataItemsType;

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
      type: "EscalationRelationshipsRespondersDataItemsType",
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
    return EscalationRelationshipsRespondersDataItems.attributeTypeMap;
  }

  public constructor() {}
}
