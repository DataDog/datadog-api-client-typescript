/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamCreateAttributes } from "./TeamCreateAttributes";
import { TeamCreateRelationships } from "./TeamCreateRelationships";
import { TeamType } from "./TeamType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team create
 */
export class TeamCreate {
  /**
   * Team creation attributes
   */
  "attributes": TeamCreateAttributes;
  /**
   * Relationships formed with the team on creation
   */
  "relationships"?: TeamCreateRelationships;
  /**
   * Team type
   */
  "type": TeamType;

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
      type: "TeamCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "TeamCreateRelationships",
    },
    type: {
      baseName: "type",
      type: "TeamType",
      required: true,
    },
  };
}
