/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamSyncAttributesFrequency } from "./TeamSyncAttributesFrequency";
import { TeamSyncAttributesSource } from "./TeamSyncAttributesSource";
import { TeamSyncAttributesType } from "./TeamSyncAttributesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team sync attributes.
 */
export class TeamSyncAttributes {
  /**
   * How often the sync process should be run. Defaults to `once` when not provided.
   */
  "frequency"?: TeamSyncAttributesFrequency;
  /**
   * The external source platform for team synchronization. Only "github" is supported.
   */
  "source": TeamSyncAttributesSource;
  /**
   * Whether to sync members from the external team to the Datadog team. Defaults to `false` when not provided.
   */
  "syncMembership"?: boolean;
  /**
   * The type of synchronization operation. "link" connects teams by matching names. "provision" creates new teams when no match is found.
   */
  "type": TeamSyncAttributesType;

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
    frequency: {
      baseName: "frequency",
      type: "TeamSyncAttributesFrequency",
    },
    source: {
      baseName: "source",
      type: "TeamSyncAttributesSource",
      required: true,
    },
    syncMembership: {
      baseName: "sync_membership",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "TeamSyncAttributesType",
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
    return TeamSyncAttributes.attributeTypeMap;
  }

  public constructor() {}
}
