/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAccessScopeWrite } from "./FleetAccessScopeWrite";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to create or replace a fleet access scope.
 */
export class FleetAccessScopeWriteRequest {
  /**
   * A fleet access scope write payload. The update target is selected by the path ID.
   */
  "data": FleetAccessScopeWrite;

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
      type: "FleetAccessScopeWrite",
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
    return FleetAccessScopeWriteRequest.attributeTypeMap;
  }

  public constructor() {}
}
