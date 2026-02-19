/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestDecisionCreateAttributes } from "./ChangeRequestDecisionCreateAttributes";
import { ChangeRequestDecisionCreateRelationships } from "./ChangeRequestDecisionCreateRelationships";
import { ChangeRequestDecisionResourceType } from "./ChangeRequestDecisionResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An included change request decision for a create or update operation.
 */
export class ChangeRequestDecisionCreateItem {
  /**
   * Attributes for creating a change request decision.
   */
  "attributes"?: ChangeRequestDecisionCreateAttributes;
  /**
   * The decision identifier.
   */
  "id": string;
  /**
   * Relationships for creating a change request decision.
   */
  "relationships"?: ChangeRequestDecisionCreateRelationships;
  /**
   * Change request decision resource type.
   */
  "type": ChangeRequestDecisionResourceType;

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
      type: "ChangeRequestDecisionCreateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ChangeRequestDecisionCreateRelationships",
    },
    type: {
      baseName: "type",
      type: "ChangeRequestDecisionResourceType",
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
    return ChangeRequestDecisionCreateItem.attributeTypeMap;
  }

  public constructor() {}
}
