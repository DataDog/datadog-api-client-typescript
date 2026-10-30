/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TemporaryGrantRequestCreateData } from "./TemporaryGrantRequestCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create a request for the authenticated human user.
 */
export class TemporaryGrantRequestCreateRequest {
  /**
   * The request resource to create. The server generates its ID.
   */
  "data": TemporaryGrantRequestCreateData;

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
      type: "TemporaryGrantRequestCreateData",
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
    return TemporaryGrantRequestCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
