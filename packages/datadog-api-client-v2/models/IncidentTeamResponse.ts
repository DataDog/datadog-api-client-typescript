/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTeamIncludedItems } from "./IncidentTeamIncludedItems";
import { IncidentTeamResponseData } from "./IncidentTeamResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "IncidentTeamResponseData",
      required: true,
    },
    included: {
      type: "Array<IncidentTeamIncludedItems>",
    },
  };
}
