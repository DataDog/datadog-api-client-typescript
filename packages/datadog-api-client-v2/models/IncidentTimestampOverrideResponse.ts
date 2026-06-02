/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTimestampOverrideDataResponse } from "./IncidentTimestampOverrideDataResponse";
import { IncidentUserData } from "./IncidentUserData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a single timestamp override.
 */
export class IncidentTimestampOverrideResponse {
  /**
   * Timestamp override data in a response.
   */
  "data": IncidentTimestampOverrideDataResponse;
  /**
   * Included related resources.
   */
  "included"?: Array<IncidentUserData>;

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
      type: "IncidentTimestampOverrideDataResponse",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentUserData>",
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
    return IncidentTimestampOverrideResponse.attributeTypeMap;
  }

  public constructor() {}
}
