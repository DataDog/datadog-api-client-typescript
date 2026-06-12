/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SharedDashboardRelationshipDashboard } from "./SharedDashboardRelationshipDashboard";
import { SharedDashboardRelationshipSharer } from "./SharedDashboardRelationshipSharer";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of a shared dashboard.
 */
export class SharedDashboardRelationships {
  /**
   * Dashboard associated with the shared dashboard.
   */
  "dashboard": SharedDashboardRelationshipDashboard;
  /**
   * User who shared the dashboard.
   */
  "sharer": SharedDashboardRelationshipSharer;

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
    dashboard: {
      baseName: "dashboard",
      type: "SharedDashboardRelationshipDashboard",
      required: true,
    },
    sharer: {
      baseName: "sharer",
      type: "SharedDashboardRelationshipSharer",
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
    return SharedDashboardRelationships.attributeTypeMap;
  }

  public constructor() {}
}
