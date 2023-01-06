/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentSearchResponseAttributes } from "./IncidentSearchResponseAttributes";
import { IncidentSearchResultsType } from "./IncidentSearchResultsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data returned by an incident search.
 */
export class IncidentSearchResponseData {
  /**
   * Attributes returned by an incident search.
   */
  "attributes"?: IncidentSearchResponseAttributes;
  /**
   * Incident search result type.
   */
  "type"?: IncidentSearchResultsType;

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
      type: "IncidentSearchResponseAttributes",
    },
    type: {
      baseName: "type",
      type: "IncidentSearchResultsType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentSearchResponseData.attributeTypeMap;
  }

  public constructor() {}
}
