/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponseIncludedItem } from "./IncidentResponseIncludedItem";
import { IncidentSearchResponseData } from "./IncidentSearchResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with incidents and facets.
 */
export class IncidentSearchResponse {
  /**
   * Data returned by an incident search.
   */
  "data": IncidentSearchResponseData;
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
      baseName: "data",
      type: "IncidentSearchResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentResponseIncludedItem>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
