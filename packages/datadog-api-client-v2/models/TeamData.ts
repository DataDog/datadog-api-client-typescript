/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamAttributes } from "./TeamAttributes";
import { TeamType } from "./TeamType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A team
 */
export class TeamData {
  /**
   * Team attributes
   */
  "attributes": TeamAttributes;
  /**
   * The team's identifier
   */
  "id": string;
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
      type: "TeamAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamData.attributeTypeMap;
  }

  public constructor() {}
}
