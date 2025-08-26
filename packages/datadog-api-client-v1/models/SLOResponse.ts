/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOResponseData } from "./SLOResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A service level objective response containing a single service level objective.
 */
export class SLOResponse {
  /**
   * A service level objective object includes a service level indicator, thresholds
   * for one or more timeframes, and metadata (`name`, `description`, `tags`, etc.).
   */
  "data"?: SLOResponseData;
  /**
   * An array of error messages. Each endpoint documents how/whether this field is
   * used.
   */
  "errors"?: Array<string>;

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
      type: "SLOResponseData",
    },
    errors: {
      baseName: "errors",
      type: "Array<string>",
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
    return SLOResponse.attributeTypeMap;
  }

  public constructor() {}
}
