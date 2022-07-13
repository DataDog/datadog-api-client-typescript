/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToIncidentPostmortemData } from "./RelationshipToIncidentPostmortemData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A relationship reference for postmortems.
 */
export class RelationshipToIncidentPostmortem {
  /**
   * The postmortem relationship data.
   */
  "data": RelationshipToIncidentPostmortemData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RelationshipToIncidentPostmortemData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentPostmortem.attributeTypeMap;
  }

  public constructor() {}
}
