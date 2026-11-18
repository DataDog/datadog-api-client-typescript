/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentOutreachModeResponseData } from "./SecurityAgentOutreachModeResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with the organization's outreach mode.
 */
export class SecurityAgentOutreachModeResponse {
  /**
   * The organization's outreach mode.
   */
  "data": SecurityAgentOutreachModeResponseData;

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
      type: "SecurityAgentOutreachModeResponseData",
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
    return SecurityAgentOutreachModeResponse.attributeTypeMap;
  }

  public constructor() {}
}
