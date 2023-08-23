/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponseData } from "./IncidentResponseData";
import { IncidentResponseIncludedItem } from "./IncidentResponseIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with an incident.
 */
export class IncidentResponse {
  /**
   * Incident data from a response.
   */
  "data": IncidentResponseData;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentResponseIncludedItem>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "IncidentResponseData",
      required: true,
    },
    included: {
      type: "Array<IncidentResponseIncludedItem>",
    },
  };
}
