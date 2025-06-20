/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorUserTemplateResponseData } from "./MonitorUserTemplateResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for retrieving all monitor user templates.
 */
export class MonitorUserTemplateListResponse {
  /**
   * An array of monitor user templates.
   */
  "data"?: Array<MonitorUserTemplateResponseData>;

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
      type: "Array<MonitorUserTemplateResponseData>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorUserTemplateListResponse.attributeTypeMap;
  }

  public constructor() {}
}
