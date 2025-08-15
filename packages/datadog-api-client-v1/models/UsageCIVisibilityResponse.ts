/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageCIVisibilityHour } from "./UsageCIVisibilityHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * CI visibility usage response
 */
export class UsageCIVisibilityResponse {
  /**
   * Response containing CI visibility usage.
   */
  "usage"?: Array<UsageCIVisibilityHour>;

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
    usage: {
      baseName: "usage",
      type: "Array<UsageCIVisibilityHour>",
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
    return UsageCIVisibilityResponse.attributeTypeMap;
  }

  public constructor() {}
}
