/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentZoomIntegrationDataResponse } from "./IncidentZoomIntegrationDataResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with Zoom integration metadata.
 */
export class IncidentZoomIntegrationResponse {
  /**
   * Zoom integration data in a response.
   */
  "data": IncidentZoomIntegrationDataResponse;

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
      type: "IncidentZoomIntegrationDataResponse",
      required: true,
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
    return IncidentZoomIntegrationResponse.attributeTypeMap;
  }

  public constructor() {}
}
