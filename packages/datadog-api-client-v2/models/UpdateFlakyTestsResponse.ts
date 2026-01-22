/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateFlakyTestsResponseData } from "./UpdateFlakyTestsResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for updating flaky test states.
 */
export class UpdateFlakyTestsResponse {
  /**
   * Summary of the update operations. Tells whether a test succeeded or failed to be updated.
   */
  "data"?: UpdateFlakyTestsResponseData;

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
      type: "UpdateFlakyTestsResponseData",
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
    return UpdateFlakyTestsResponse.attributeTypeMap;
  }

  public constructor() {}
}
