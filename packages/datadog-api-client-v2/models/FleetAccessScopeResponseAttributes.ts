/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAccessScopeFeatures } from "./FleetAccessScopeFeatures";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Fleet access scope attributes and audit information.
 */
export class FleetAccessScopeResponseAttributes {
  /**
   * RFC3339 timestamp when the scope was created.
   */
  "createdAt"?: string;
  /**
   * Handle of the user who created the scope.
   */
  "creator"?: string;
  /**
   * Human-readable description of the access scope. Omission clears the description on update.
   */
  "description"?: string;
  /**
   * Fleet actions authorized on agents matching the access scope query.
   */
  "features"?: FleetAccessScopeFeatures;
  /**
   * Agent query selecting hosts covered by the scope. An empty query matches all hosts. Omission clears the query on update.
   */
  "query"?: string;
  /**
   * RFC3339 timestamp when the scope was last updated.
   */
  "updatedAt"?: string;
  /**
   * Handle of the user who last updated the scope.
   */
  "updater"?: string;

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
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    creator: {
      baseName: "creator",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    features: {
      baseName: "features",
      type: "FleetAccessScopeFeatures",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
    },
    updater: {
      baseName: "updater",
      type: "string",
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
    return FleetAccessScopeResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
