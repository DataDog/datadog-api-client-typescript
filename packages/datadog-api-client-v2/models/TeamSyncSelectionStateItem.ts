/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamSyncSelectionStateExternalId } from "./TeamSyncSelectionStateExternalId";
import { TeamSyncSelectionStateOperation } from "./TeamSyncSelectionStateOperation";
import { TeamSyncSelectionStateScope } from "./TeamSyncSelectionStateScope";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Identifies a team or organization hierarchy to include in synchronization.
 */
export class TeamSyncSelectionStateItem {
  /**
   * The external identifier for a team or organization in the source platform.
   */
  "externalId": TeamSyncSelectionStateExternalId;
  /**
   * The operation to perform on the selected hierarchy.
   * When set to `include`, synchronization covers the
   * referenced teams or organizations.
   */
  "operation"?: TeamSyncSelectionStateOperation;
  /**
   * The scope of the selection. When set to `subtree`,
   * synchronization includes the referenced team or
   * organization and everything nested under it.
   */
  "scope"?: TeamSyncSelectionStateScope;

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
    externalId: {
      baseName: "external_id",
      type: "TeamSyncSelectionStateExternalId",
      required: true,
    },
    operation: {
      baseName: "operation",
      type: "TeamSyncSelectionStateOperation",
    },
    scope: {
      baseName: "scope",
      type: "TeamSyncSelectionStateScope",
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
    return TeamSyncSelectionStateItem.attributeTypeMap;
  }

  public constructor() {}
}
