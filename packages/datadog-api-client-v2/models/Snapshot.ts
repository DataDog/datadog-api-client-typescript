/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnapshotData } from "./SnapshotData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single heatmap snapshot resource returned by create or update operations.
 */
export class Snapshot {
  /**
   * Data object representing a heatmap snapshot, including its identifier, type, and attributes.
   */
  "data"?: SnapshotData;

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
      type: "SnapshotData",
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
    return Snapshot.attributeTypeMap;
  }

  public constructor() {}
}
