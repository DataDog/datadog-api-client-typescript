/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDowntimeDataRequest } from "./SyntheticsDowntimeDataRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for creating or updating a Synthetics downtime.
 */
export class SyntheticsDowntimeRequest {
  /**
   * The data object for a Synthetics downtime create or update request.
   */
  "data": SyntheticsDowntimeDataRequest;

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
      type: "SyntheticsDowntimeDataRequest",
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
    return SyntheticsDowntimeRequest.attributeTypeMap;
  }

  public constructor() {}
}
