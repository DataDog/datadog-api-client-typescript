/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorklflowCancelInstanceResponseData } from "./WorklflowCancelInstanceResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information about the canceled instance.
 */
export class WorklflowCancelInstanceResponse {
  /**
   * Data about the canceled instance.
   */
  "data"?: WorklflowCancelInstanceResponseData;

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
      type: "WorklflowCancelInstanceResponseData",
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
    return WorklflowCancelInstanceResponse.attributeTypeMap;
  }

  public constructor() {}
}
