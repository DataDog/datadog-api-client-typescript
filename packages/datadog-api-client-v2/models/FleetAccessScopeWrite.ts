/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAccessScopeAttributes } from "./FleetAccessScopeAttributes";
import { FleetAccessScopeResourceType } from "./FleetAccessScopeResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A fleet access scope write payload. The update target is selected by the path ID.
 */
export class FleetAccessScopeWrite {
  /**
   * Mutable fleet access scope attributes. PUT replaces all mutable attributes; omitted strings become empty and omitted feature flags become false.
   */
  "attributes"?: FleetAccessScopeAttributes;
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
      type: "FleetAccessScopeAttributes",
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
    return FleetAccessScopeWrite.attributeTypeMap;
  }

  public constructor() {}
}
