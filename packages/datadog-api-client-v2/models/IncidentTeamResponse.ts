/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTeamIncludedItems } from "./IncidentTeamIncludedItems";
import { IncidentTeamResponseData } from "./IncidentTeamResponseData";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Response with an incident team payload.
 */
export class IncidentTeamResponse {
  /**
   * Incident Team data from a response.
   */
  "data": IncidentTeamResponseData;
  /**
   * Included objects from relationships.
   */
  "included"?: Array<IncidentTeamIncludedItems>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "IncidentTeamResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentTeamIncludedItems>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTeamResponse.attributeTypeMap;
  }

  public constructor() {}
}
