/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes describing a directional relationship between two entities (cases, incidents, or pages).
 */
export class CaseLinkAttributes {
  /**
   * The UUID of the child (target) entity in the relationship.
   */
  "childEntityId": string;
  /**
   * The type of the child entity. Allowed values: `CASE`, `INCIDENT`, `PAGE`, `AGENT_CONVERSATION`.
   */
  "childEntityType": string;
  /**
   * The UUID of the parent (source) entity in the relationship.
   */
  "parentEntityId": string;
  /**
   * The type of the parent entity. Allowed values: `CASE`, `INCIDENT`, `PAGE`, `AGENT_CONVERSATION`.
   */
  "parentEntityType": string;
  /**
   * The type of directional relationship. Allowed values: `RELATES_TO` (bidirectional association), `CAUSES` (parent causes child), `BLOCKS` (parent blocks child), `DUPLICATES` (parent duplicates child), `PARENT_OF` (hierarchical), `SUCCESSOR_OF` (sequence), `ESCALATES_TO` (priority escalation).
   */
  "relationship": string;

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
    childEntityId: {
      baseName: "child_entity_id",
      type: "string",
      required: true,
    },
    childEntityType: {
      baseName: "child_entity_type",
      type: "string",
      required: true,
    },
    parentEntityId: {
      baseName: "parent_entity_id",
      type: "string",
      required: true,
    },
    parentEntityType: {
      baseName: "parent_entity_type",
      type: "string",
      required: true,
    },
    relationship: {
      baseName: "relationship",
      type: "string",
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
    return CaseLinkAttributes.attributeTypeMap;
  }

  public constructor() {}
}
