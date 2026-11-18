/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAccessScope } from "./FleetAccessScope";
import { FleetAccessScopesResponseMeta } from "./FleetAccessScopesResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing all fleet access scopes in the organization.
 */
export class FleetAccessScopesResponse {
  /**
   * Access scopes in the organization.
   */
  "data": Array<FleetAccessScope>;
  /**
   * Metadata for the list of fleet access scopes.
   */
  "meta"?: FleetAccessScopesResponseMeta;

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
      type: "Array<FleetAccessScope>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetAccessScopesResponseMeta",
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
    return FleetAccessScopesResponse.attributeTypeMap;
  }

  public constructor() {}
}
