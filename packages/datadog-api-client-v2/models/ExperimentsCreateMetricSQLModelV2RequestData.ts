/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsUpdateMetricSQLModelV2RequestDataAttributes } from "./ExperimentsUpdateMetricSQLModelV2RequestDataAttributes";
import { ExperimentsUpdateMetricSQLModelV2RequestDataType } from "./ExperimentsUpdateMetricSQLModelV2RequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metric SQL model resource to create.
 */
export class ExperimentsCreateMetricSQLModelV2RequestData {
  /**
   * Complete column mappings and query used to replace the metric SQL model.
   */
  "attributes": ExperimentsUpdateMetricSQLModelV2RequestDataAttributes;
  /**
   * Optional JSON:API resource identifier field.
   */
  "id"?: string;
  /**
   * Metric SQL models resource type.
   */
  "type": ExperimentsUpdateMetricSQLModelV2RequestDataType;

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
      type: "ExperimentsUpdateMetricSQLModelV2RequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsUpdateMetricSQLModelV2RequestDataType",
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
    return ExperimentsCreateMetricSQLModelV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
