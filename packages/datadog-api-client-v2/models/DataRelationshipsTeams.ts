/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataRelationshipsTeamsDataItems } from "./DataRelationshipsTeamsDataItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Associates teams with this schedule in a data structure.
 */
export class DataRelationshipsTeams {
  /**
   * An array of team references for this schedule.
   */
  "data"?: Array<DataRelationshipsTeamsDataItems>;

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
    data: {
      baseName: "data",
      type: "Array<DataRelationshipsTeamsDataItems>",
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
    return DataRelationshipsTeams.attributeTypeMap;
  }

  public constructor() {}
}
