/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamAttributes } from "./TeamAttributes";
import { TeamRelationships } from "./TeamRelationships";
import { TeamType } from "./TeamType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A team
 */
export class Team {
  /**
   * Team attributes
   */
  "attributes": TeamAttributes;
  /**
   * The team's identifier
   */
  "id": string;
  /**
   * Resources related to a team
   */
  "relationships"?: TeamRelationships;
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
      type: "TeamAttributes",
      required: true,
    },
    id: {
      type: "string",
      required: true,
    },
    relationships: {
      type: "TeamRelationships",
    },
    type: {
      type: "TeamType",
      required: true,
    },
  };
}
