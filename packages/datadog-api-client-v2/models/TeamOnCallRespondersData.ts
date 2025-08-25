/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamOnCallRespondersDataRelationships } from "./TeamOnCallRespondersDataRelationships";
import { TeamOnCallRespondersDataType } from "./TeamOnCallRespondersDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the main on-call responder object for a team, including relationships and metadata.
 */
export class TeamOnCallRespondersData {
  /**
   * Unique identifier of the on-call responder configuration.
   */
  "id"?: string;
  /**
   * Relationship objects linked to a team's on-call responder configuration, including escalations and responders.
   */
  "relationships"?: TeamOnCallRespondersDataRelationships;
  /**
   * Represents the resource type for a group of users assigned to handle on-call duties within a team.
   */
  "type": TeamOnCallRespondersDataType;

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
      type: "TeamOnCallRespondersDataRelationships",
    },
    type: {
      baseName: "type",
      type: "TeamOnCallRespondersDataType",
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
    return TeamOnCallRespondersData.attributeTypeMap;
  }

  public constructor() {}
}
