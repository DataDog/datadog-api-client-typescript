/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateFlakyTestsRequestData } from "./UpdateFlakyTestsRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to update the state of multiple flaky tests.
 */
export class UpdateFlakyTestsRequest {
  /**
   * The JSON:API data for updating flaky test states.
   */
  "data": UpdateFlakyTestsRequestData;

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
      type: "UpdateFlakyTestsRequestData",
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
    return UpdateFlakyTestsRequest.attributeTypeMap;
  }

  public constructor() {}
}
