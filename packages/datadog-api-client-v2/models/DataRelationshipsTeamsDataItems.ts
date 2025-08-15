/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataRelationshipsTeamsDataItemsType } from "./DataRelationshipsTeamsDataItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relates a team to this schedule, identified by `id` and `type` (must be `teams`).
 */
export class DataRelationshipsTeamsDataItems {
  /**
   * The unique identifier of the team in this relationship.
   */
  "id": string;
  /**
   * Teams resource type.
   */
  "type": DataRelationshipsTeamsDataItemsType;

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
      type: "DataRelationshipsTeamsDataItemsType",
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
    return DataRelationshipsTeamsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
