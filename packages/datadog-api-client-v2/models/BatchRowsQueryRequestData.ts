/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BatchRowsQueryDataType } from "./BatchRowsQueryDataType";
import { BatchRowsQueryRequestDataAttributes } from "./BatchRowsQueryRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class BatchRowsQueryRequestData {
  "attributes"?: BatchRowsQueryRequestDataAttributes;
  /**
   * Resource type identifier for batch queries of reference table rows.
   */
  "type": BatchRowsQueryDataType;

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
      type: "BatchRowsQueryRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "BatchRowsQueryDataType",
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
    return BatchRowsQueryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
