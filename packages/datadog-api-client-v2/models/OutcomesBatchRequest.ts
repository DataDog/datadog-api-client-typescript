/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OutcomesBatchRequestData } from "./OutcomesBatchRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard outcomes batch request.
 */
export class OutcomesBatchRequest {
  /**
   * Scorecard outcomes batch request data.
   */
  "data"?: OutcomesBatchRequestData;

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
      type: "OutcomesBatchRequestData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OutcomesBatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
