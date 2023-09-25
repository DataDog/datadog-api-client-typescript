/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmRetentionFilterType } from "./ApmRetentionFilterType";
import { RetentionFilterCreateAttributes } from "./RetentionFilterCreateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The body of the retention filter to be created.
 */
export class RetentionFilterCreateData {
  /**
   * The object describing the configuration of the retention filter to create/update.
   */
  "attributes": RetentionFilterCreateAttributes;
  /**
   * The type of the resource.
   */
  "type": ApmRetentionFilterType;

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
      type: "RetentionFilterCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApmRetentionFilterType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
