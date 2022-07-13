/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponseData } from "./IncidentResponseData";
import { IncidentResponseIncludedItem } from "./IncidentResponseIncludedItem";
import { IncidentResponseMeta } from "./IncidentResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of incidents.
 */
export class IncidentsResponse {
  /**
   * An array of incidents.
   */
  "data": Array<IncidentResponseData>;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentResponseIncludedItem>;
  /**
   * The metadata object containing pagination metadata.
   */
  "meta"?: IncidentResponseMeta;

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
      type: "Array<IncidentResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentResponseMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentsResponse.attributeTypeMap;
  }

  public constructor() {}
}
