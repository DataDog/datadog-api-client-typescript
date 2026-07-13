/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentPostmortemData } from "./IncidentPostmortemData";
import { IncidentPostmortemIncluded } from "./IncidentPostmortemIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a single incident postmortem.
 */
export class IncidentPostmortemResponse {
  /**
   * The postmortem resource.
   */
  "data": IncidentPostmortemData;
  /**
   * Related objects included in the response.
   */
  "included"?: Array<IncidentPostmortemIncluded>;

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
      type: "IncidentPostmortemData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentPostmortemIncluded>",
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
    return IncidentPostmortemResponse.attributeTypeMap;
  }

  public constructor() {}
}
