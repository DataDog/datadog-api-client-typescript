/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTeamTeamType } from "./UserTeamTeamType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The team associated with the membership
 */
export class RelationshipToUserTeamTeamData {
  /**
   * The ID of the team associated with the membership
   */
  "id": string;
  /**
   * User team team type
   */
  "type": UserTeamTeamType;

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
      type: "UserTeamTeamType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToUserTeamTeamData.attributeTypeMap;
  }

  public constructor() {}
}