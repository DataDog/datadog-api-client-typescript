/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAccessScopeResourceType } from "./FleetAccessScopeResourceType";
import { FleetAccessScopeResponseAttributes } from "./FleetAccessScopeResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A fleet access scope. Use `fleet-scope:<id>` as the restriction policy resource identifier.
 */
export class FleetAccessScope {
  /**
   * Fleet access scope attributes and audit information.
   */
  "attributes": FleetAccessScopeResponseAttributes;
  /**
   * Unique identifier of the scope, also used in the restriction policy resource identifier `fleet-scope:<id>`.
   */
  "id": string;
  /**
   * The JSON:API resource type for a fleet access scope.
   */
  "type": FleetAccessScopeResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "FleetAccessScopeResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetAccessScopeResourceType",
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
    return FleetAccessScope.attributeTypeMap;
  }

  public constructor() {}
}
