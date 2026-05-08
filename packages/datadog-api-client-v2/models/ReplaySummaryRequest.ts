/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReplaySummaryDataRequest } from "./ReplaySummaryDataRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for generating a RUM replay summary.
 */
export class ReplaySummaryRequest {
  /**
   * Data object for a RUM replay summary request.
   */
  "data": ReplaySummaryDataRequest;

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
      type: "ReplaySummaryDataRequest",
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
    return ReplaySummaryRequest.attributeTypeMap;
  }

  public constructor() {}
}
