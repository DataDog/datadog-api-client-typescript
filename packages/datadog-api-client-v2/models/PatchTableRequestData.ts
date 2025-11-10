/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchTableRequestDataAttributes } from "./PatchTableRequestDataAttributes";
import { PatchTableRequestDataType } from "./PatchTableRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object containing the partial table definition updates.
 */
export class PatchTableRequestData {
  /**
   * Attributes that define the updates to the reference table's configuration and properties.
   */
  "attributes"?: PatchTableRequestDataAttributes;
  /**
   * Reference table resource type.
   */
  "type": PatchTableRequestDataType;

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
      type: "PatchTableRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "PatchTableRequestDataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PatchTableRequestData.attributeTypeMap;
  }

  public constructor() {}
}
