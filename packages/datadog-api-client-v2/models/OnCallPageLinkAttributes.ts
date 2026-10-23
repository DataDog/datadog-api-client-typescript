/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageLinkEntityType } from "./OnCallPageLinkEntityType";
import { OnCallPageLinkRelationshipType } from "./OnCallPageLinkRelationshipType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a page link. A page can be the child of another Datadog resource
 * (for example, when an incident triggers it), or the parent of one (for example, when the
 * page is escalated to an incident).
 */
export class OnCallPageLinkAttributes {
  /**
   * The ID of the child resource.
   */
  "childEntityId": string;
  /**
   * The type of a resource linked to a page.
   */
  "childEntityType": OnCallPageLinkEntityType;
  /**
   * The ID of the parent resource.
   */
  "parentEntityId": string;
  /**
   * The type of a resource linked to a page.
   */
  "parentEntityType": OnCallPageLinkEntityType;
  /**
   * How the parent resource relates to the child resource.
   */
  "relationship": OnCallPageLinkRelationshipType;

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
      type: "OnCallPageLinkEntityType",
      required: true,
    },
    parentEntityId: {
      baseName: "parent_entity_id",
      type: "string",
      required: true,
    },
    parentEntityType: {
      baseName: "parent_entity_type",
      type: "OnCallPageLinkEntityType",
      required: true,
    },
    relationship: {
      baseName: "relationship",
      type: "OnCallPageLinkRelationshipType",
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
    return OnCallPageLinkAttributes.attributeTypeMap;
  }

  public constructor() {}
}
