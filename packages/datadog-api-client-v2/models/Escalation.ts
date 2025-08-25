/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationRelationships } from "./EscalationRelationships";
import { EscalationType } from "./EscalationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents an escalation policy step.
 */
export class Escalation {
  /**
   * Unique identifier of the escalation step.
   */
  "id"?: string;
  /**
   * Contains the relationships of an escalation object, including its responders.
   */
  "relationships"?: EscalationRelationships;
  /**
   * Represents the resource type for individual steps in an escalation policy used during incident response.
   */
  "type": EscalationType;

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
    relationships: {
      baseName: "relationships",
      type: "EscalationRelationships",
    },
    type: {
      baseName: "type",
      type: "EscalationType",
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
    return Escalation.attributeTypeMap;
  }

  public constructor() {}
}
