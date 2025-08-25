/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorklflowGetInstanceResponseData } from "./WorklflowGetInstanceResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The state of the given workflow instance.
 */
export class WorklflowGetInstanceResponse {
  /**
   * The data of the instance response.
   */
  "data"?: WorklflowGetInstanceResponseData;

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
      type: "WorklflowGetInstanceResponseData",
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
    return WorklflowGetInstanceResponse.attributeTypeMap;
  }

  public constructor() {}
}
