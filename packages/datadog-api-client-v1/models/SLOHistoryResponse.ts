/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOHistoryResponseData } from "./SLOHistoryResponseData";
import { SLOHistoryResponseError } from "./SLOHistoryResponseError";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A service level objective history response.
 */
export class SLOHistoryResponse {
  /**
   * An array of service level objective objects.
   */
  "data"?: SLOHistoryResponseData;
  /**
   * A list of errors while querying the history data for the service level objective.
   */
  "errors"?: Array<SLOHistoryResponseError>;

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
      type: "SLOHistoryResponseData",
    },
    errors: {
      baseName: "errors",
      type: "Array<SLOHistoryResponseError>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
