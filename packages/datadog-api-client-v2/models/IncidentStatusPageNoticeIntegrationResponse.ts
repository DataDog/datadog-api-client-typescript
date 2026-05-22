/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentStatusPageNoticeIntegrationDataResponse } from "./IncidentStatusPageNoticeIntegrationDataResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with status page notice integration metadata.
 */
export class IncidentStatusPageNoticeIntegrationResponse {
  /**
   * Status page notice integration data in a response.
   */
  "data": IncidentStatusPageNoticeIntegrationDataResponse;

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
      type: "IncidentStatusPageNoticeIntegrationDataResponse",
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
    return IncidentStatusPageNoticeIntegrationResponse.attributeTypeMap;
  }

  public constructor() {}
}
