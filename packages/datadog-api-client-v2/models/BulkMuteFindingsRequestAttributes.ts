/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BulkMuteFindingsRequestProperties } from "./BulkMuteFindingsRequestProperties";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The mute properties to be updated.
 */
export class BulkMuteFindingsRequestAttributes {
  /**
   * Object containing the new mute properties of the findings.
   */
  "mute": BulkMuteFindingsRequestProperties;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    mute: {
      baseName: "mute",
      type: "BulkMuteFindingsRequestProperties",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BulkMuteFindingsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
